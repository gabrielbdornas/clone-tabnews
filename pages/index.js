import { useState, useEffect } from 'react';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
      }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.length - completedCount;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 Meu Gerenciador de Tarefas</h1>

      {/* Add Task Form */}
      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          ➕ Adicionar
        </button>
      </form>

      {/* Filter Buttons */}
      <div style={styles.filters}>
        <button
          onClick={() => setFilter('all')}
          style={{...styles.filterButton, ...(filter === 'all' && styles.activeFilter)}}
        >
          Todas ({tasks.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          style={{...styles.filterButton, ...(filter === 'active' && styles.activeFilter)}}
        >
          Ativas ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{...styles.filterButton, ...(filter === 'completed' && styles.activeFilter)}}
        >
          Concluídas ({completedCount})
        </button>
      </div>

      {/* Tasks List */}
      <div style={styles.taskList}>
        {filteredTasks.length === 0 ? (
          <p style={styles.emptyMessage}>
            {filter === 'all' ? 'Nenhuma tarefa ainda. Adicione uma!' :
             filter === 'active' ? 'Nenhuma tarefa ativa.' : 'Nenhuma tarefa concluída.'}
          </p>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} style={styles.taskItem}>
              <div style={styles.taskContent}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={styles.checkbox}
                />
                <span style={{
                  ...styles.taskText,
                  ...(task.completed && styles.completedTask)
                }}>
                  {task.text}
                </span>
              </div>
              <div style={styles.taskMeta}>
                <small style={styles.taskDate}>{task.createdAt}</small>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={styles.deleteButton}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Progress Bar */}
      {tasks.length > 0 && (
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${(completedCount / tasks.length) * 100}%`
              }}
            />
          </div>
          <p style={styles.progressText}>
            {completedCount} de {tasks.length} tarefas concluídas
            ({Math.round((completedCount / tasks.length) * 100)}%)
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2.5em'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none'
  },
  addButton: {
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'center'
  },
  filterButton: {
    padding: '8px 16px',
    border: '2px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  activeFilter: {
    backgroundColor: '#2196F3',
    color: 'white',
    borderColor: '#2196F3'
  },
  taskList: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #eee'
  },
  taskContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: 1
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  },
  taskText: {
    fontSize: '16px',
    color: '#333'
  },
  completedTask: {
    textDecoration: 'line-through',
    color: '#888'
  },
  taskMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  taskDate: {
    color: '#888',
    fontSize: '12px'
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '5px'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic'
  },
  progressContainer: {
    marginTop: '20px',
    textAlign: 'center'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#ddd',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '10px'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    transition: 'width 0.3s ease'
  },
  progressText: {
    color: '#666',
    fontSize: '14px',
    margin: 0
  }
};

// Define que Home é a saída padrão
export default Home;
