def add_task(tasks, task_name):
  task = {"task": task_name, "completed": False}
  tasks.append(task)

  print(f'Tarefa {task_name} foi adicionada com sucesso!')
  return

def view_tasks(tasks):
  print('\nLista de tarefas: ')
  for index, task in enumerate(tasks, start=1):
    status = "✓" if task["completed"] else " "
    task_name = task["task"]
    print(f"{index}. [{status}] {task_name}")
  return

def update_task(tasks, task_index, new_task_name): 
  adjusted_task_index = int(task_index) - 1
  if adjusted_task_index >= 0 and adjusted_task_index < len(tasks):
    tasks[adjusted_task_index]['task'] = new_task_name
    print(f"Tarefa {task_index} atualizada para {new_task_name}")
  else:
    print('Índice de tarefa inválido.')

def complete_task(tasks, task_index):
  adjusted_task_index = int(task_index) - 1
  tasks[adjusted_task_index]['completed'] = True
  print(f'Tarefa {task_index} marcada como completada!')
  return

def delete_completed_task(tasks):
  initial_task_count = len(tasks)
  tasks[:] = [task for task in tasks if not task["completed"]]

  completed_count = initial_task_count - len(tasks)

  if completed_count > 0:
    print(f'{completed_count} tarefa(s) completada(s) removida(s) com sucesso!')
  else:
    print('Não há tarefas completadas para remover.')

  return

tasks = []
while True:
  print('\nMenu do Gerenciador de Lista de tarefas:')
  print('1. Adicionar tarefa')
  print('2. Ver tarefa')
  print('3. Atualizar tarefa')
  print('4. Completar tarefa')
  print('5. Deletar tarefas completadas')
  print('6. Sair')

  choice = input('Digite a sua escolha: ')

  if choice == "1":
    task_name = input('Digite o nome da tarefa que deseja adicionar: ')
    add_task(tasks, task_name)
  elif choice == "2":
    view_tasks(tasks)
  elif choice == "3":
    view_tasks(tasks)
    task_index = input('Digite o número da tarefa que deseja atualizar: ')
    new_name = input('Digite o novo nome da tarefa: ')
    update_task(tasks, task_index, new_name)
  elif choice == "4":
    view_tasks(tasks)
    task_index = input('Digite o número da terafa que deseja completar: ')
    complete_task(tasks, task_index)
  elif choice == "5":
    delete_completed_task(tasks)
    view_tasks(tasks)
  elif choice == "6": 
    break

print('Programa finalizado!')