import requests from rq
import csv
from bs4 import BeautifulSoup

# Constants
SITE = 'https://czv.kz/'


HEADERS = {
    'user-agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', 
    'accept' : '*/*',
}

# Dataset files
F_BIRDS = "birds.csv"
F_FEED = "feed.csv"
F_MEDICINES = "medicines.csv"
F_FURNITURE = "furniture.csv"
F_TOYS = "toys.csv"


def get_html(url, params=None):
    request = rq.get(url, headers=HEADERS, params=params)
    return request

def get_content(html):
    soup = BeautifulSoup(html, 'html.parser')
    items = soup.find_all(
