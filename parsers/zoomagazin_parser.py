"""
Парсер сайта "zoomagazin.kz"
Создано на основе уроков 
https://www.youtube.com/watch?v=J5sqWAqDPyE
"""
import requests as rq
import csv
import uuid
import urllib.request
import shutil
from dotenv import load_dotenv
import os 
from os.path import join, dirname
from bs4 import BeautifulSoup

# Dotenv configuration
# All variables are stored in .env
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
#Константы
URL = os.environ.get("ZOOMAGAZIN")
HEADERS = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15','accept':'*/*'}
SITE = os.environ.get('SITE') # Ex: 'https://zoomagazin.kz'
FILE = os.environ.get("FILE_NAME") # Ex: 'products.csv'
IMAGES_STORE = os.environ.get("IMAGES_STORE") # Absolute path to the dir where you gonna store static data

#CATEGORY = 39 - it just for DB project, you can delete it if necessacy

#Получение html кода страницы
def get_html(url,params=None):
    r = rq.get(url, headers=HEADERS,params=params)
    return r


def download_image(imagePath, imageName):
    response = rq.get(imagePath, stream=True)
    
    file = open(IMAGES_STORE + imageName, 'wb')
    
    response.raw.decode_content = True
    shutil.copyfileobj(response.raw, file)
    del response
#Парсинг контента
def get_content(html):
    #Наша html страница
    soup = BeautifulSoup(html, 'html.parser')
    #Ищем все эелементы с нужным названием класса
    items = soup.find_all('div','us-module-item d-flex flex-column')
    #Список где хранятся словари с параметрами
    cat_feeds =  []
    for item in items:
        # Параметры которые мы ищем
        productName = item.find('div','us-module-title flex-grow-1').findChild().get_text()
        productPrice = item.find('span','us-module-price-actual').get_text().strip().replace('тг',"")
        productImg = item.find('div','us-module-img').find('img')['src']
        productDescription = item.find('div','us-product-list-description')
        productCategory = CATEGORY
        # Генерация хэшированного имени для изображения
        imageName = str(uuid.uuid4()) + ".jpg"

        if productDescription != None:
            productDescription = productDescription.get_text()
        else:
            productDescription = "The description is not specified"
        
        #download_image(productImg, imageName) # скачивает изображения
        
        #В список добавляем словарь со всеми параметрами
        cat_feeds.append({
            'p_productImg': imageName,
            'p_productName' : productName,
            'p_price' : productPrice,
            'p_description' : productDescription,
            'p_categoryId' : productCategory,
        }) 
    return cat_feeds
#Подсчет количества страниц
def get_page_count(html):
    #Получаем страницы
    soup = BeautifulSoup(html,'html.parser')
    #Ищем все блоки кнопок индексации страниц
    pageCount = soup.find('ul','pagination').find_all('li')
    #Возвращаем предпоследний элемент кнопки,содержащий количество страниц в данной категории
    return int(pageCount[-1].findChild().get('href').split('=')[1])

#Сохранение данных в csv файле
def save_file(items, path):
    with open(path, 'w',newline='',encoding='utf-8') as file:
        writer = csv.writer(file, delimiter=',')
        #Инициирование первой строки определяющей названия стоблцов
        writer.writerow(['p_productImg','p_productName','p_price', 'p_description' , 'p_categoryId'])
        #Проходим по каждому блоку и 
        for item in items:
            #Проходим по списку со словарями и также записываем в новую строку
            writer.writerow([item['p_productImg'],item['p_productName'],item['p_price'],item['p_description'],item['p_categoryId']])
#Главная функция осуществляющая парсинг
def parse():
    #Получаем html
    html = get_html(URL)
    products = []
    #Проверяем на наличие ответа от сервера
    if(html.status_code == 200):
        #pages_count = get_page_count(html.text)
        #Проходим по страницам от 1 до pages_count включительно
        for page in range(1,2):
            if page != 1:
                html = get_html(URL,params={'page' : page})
            html = get_html(URL)
            products.extend(get_content(html.text))
        #После цикла сохраняем
        save_file(products,FILE)
    else:
        print('Error')
parse()

