from google import genai
import os
from langchain_community.document_loaders import TextLoader
from read_js_file import read_file_text
from dotenv import load_dotenv
from langchain_core.output_parsers import StrOutputParser
import shutil

load_dotenv()

def find_file_by_name(directory, target_filename):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower() == target_filename.lower():
                return os.path.join(root, file)
    return None

def process_files(react_project_path, nextjs_project_path):
    app_file_path = find_file_by_name(os.path.join(react_project_path, "src"), "app.tsx")
    
    if not app_file_path:
        raise FileNotFoundError("app.tsx not found in the React project's src directory")
    
    loader = TextLoader(app_file_path)
    document = loader.load()
    
    api_key = os.getenv('GOOGLE_GEMINI_API_KEY')

    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
        model='gemini-2.0-flash',
        contents=f'''
        Convert the following React component in app.tsx style to a Next.js page.tsx component with default export Home.
        Do not add any comments or anything, as the code is directly being written into a program.
        Since it is a next js project file, remember to follow all convention including client and server side rendering...
        \n\n
        Original code:\n{document[0].page_content}\n\n
        Converted Next.js page.tsx code:
        '''
    )

    converted_code = response.text
        
    pages_dir = os.path.join(nextjs_project_path, "src/app")
    os.makedirs(pages_dir, exist_ok=True)
    destination_path = os.path.join(pages_dir, "page.tsx")
    
    with open(destination_path, "w") as f:
        f.write(converted_code)
    
    print(f"Successfully converted {app_file_path} to {destination_path}")



if __name__ == "__main__":
    react_project = "./react_project_01/app01"
    nextjs_project = "./react_project_01/next-app01"
    process_files(react_project, nextjs_project)

