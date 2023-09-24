from transformers import AutoImageProcessor, ResNetForImageClassification
import torch
from PIL import Image
import os

processor = AutoImageProcessor.from_pretrained("microsoft/resnet-50")
model = ResNetForImageClassification.from_pretrained("microsoft/resnet-50")

path = "/Users/dinu/Desktop/delta R1/ML/resnet_50/predict/"
dir = os.listdir(path)

for file in dir:

    if file.endswith(".jpeg"):

        image = Image.open(path+file)

        inputs = processor(image, return_tensors="pt")

        with torch.no_grad():
            logits = model(**inputs).logits

        predicted_label = logits.argmax(-1).item()
        prediction = model.config.id2label[predicted_label]
        print(prediction.split(",")[0])