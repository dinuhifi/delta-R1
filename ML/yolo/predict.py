from ultralytics import YOLO
import numpy as np

model = YOLO('/yolo/runs/classify/train3/weights/best.pt')
results = model.predict('/yolo/predict/3920727.jpg')

result_dict = results[0].names
probability = results[0].probs.data.tolist()
print("The image is a:",result_dict[np.argmax(probability)])