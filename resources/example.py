import requests 

def hello_world(event: dict, _context): 
    resp = requests.get("google.com")
    print("Hello world!")
    return resp.ok
