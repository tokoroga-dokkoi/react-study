import { VFC } from 'react';
import TodoList from '../../components/organisms/TodoList';
import { Todo } from '../../domain/todo/Todo';

type Props = {
  todoList: Todo[];
  completed: (id: number) => void;
};
const EnhancedTodoList: VFC<Props> = ({ todoList = [], completed }) => (
  <TodoList todoList={todoList} completed={completed} />
);

export default EnhancedTodoList;
