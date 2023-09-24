import torch

x = torch.tensor([1,2,3,4], dtype=torch.float32, requires_grad=True)
y = torch.tensor([3,6,9,12], dtype=torch.float32, requires_grad=True)
w = torch.tensor(0.00, dtype=torch.float32, requires_grad=True)

class Model(torch.nn.Module):
    def __init__(self):
        super(Model, self).__init__()
        self.linear = torch.nn.Linear(1,1)

    def forward(self, x):
        return self.linear(x)
    
model = Model()

loss_fn = torch.nn.MSELoss()
optimizer = torch.optim.SGD(params=model.parameters(), lr=0.1)

for i in range(100):

    outputs = model(x.view(-1,1))
    loss = loss_fn(outputs, y.view(-1,1))

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

weight = model.linear.weight.item()
print(weight)