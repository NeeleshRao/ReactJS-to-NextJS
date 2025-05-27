from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from read_js_file import read_file_text
from dotenv import load_dotenv
import os

load_dotenv()
output_count = 2

template = """
    I am giving you the content of a javascript program. You will have to convert the js to ts logic.
    I dont't want any of this text like : Sure, I can help you with that! Here is the equivalent TypeScript code for the given JavaScript code:
    or anything after the program ends, just give me the code, as it will directly be written into a typescript file.
    Also, do not add ''' these comments and all, just give the program.
    I want only the ts code, and no other explanation. Only typescript program is enough, not even a single character extra.
    I dont't want any extra text or explanation by you. The result will directly be added to a file, so don't add any extra text as the program will not run.
    I repeat that no extra text to be added apart from the program content. 
    Remember to add all the exports at the end of the file, this is important.   
    The file content of the javascript program is this : {filecontent}
"""

prompt = ChatPromptTemplate.from_template(template=template)

model = OllamaLLM(model="llama3")

chain = prompt | model

js_file_content = read_file_text("./basic_js_file_03_50.js")

result = chain.invoke({'filecontent' : js_file_content})

print(result)

with open(f'./outputs/output_try{output_count}.ts', 'w') as f:
    f.write(result)



