#import packages
from bs4 import BeautifulSoup
from requests_html import HTMLSession

#request the URL
url = "https://artlist.io/song/78748/live-in-the-moment"

session = HTMLSession()

r = session.get(url)

r.html.render()  # this call executes the js in the page

if r.ok :
    soup = BeautifulSoup(r.text, 'html.parser')
    #result = r.html.find('.hidden').text
    print(soup)
