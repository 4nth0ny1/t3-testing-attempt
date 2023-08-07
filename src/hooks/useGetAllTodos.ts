import { api } from "../utils/api";

export const useGetAllTodos = () => {
    return api.todo.getAll.useQuery();
}