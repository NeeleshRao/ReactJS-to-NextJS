from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv('GOOGLE_GEMINI_API_KEY')

client = genai.Client(api_key=api_key)

response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents="What is your purpose??"
)

print(response.text)

