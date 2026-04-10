import TaskOverView from "@/components/task-overview";

async function fecthListOfTasks() {
  try {
    const apiResponse = await fetch("http://localhost:3000/api/get-tasks", {
      method: "GET",
      cache: "no-store",
    });
    const result = await apiResponse.json();
    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}
export default async function Tasks() {
  const taskList = await fecthListOfTasks();
  return <TaskOverView taskList={taskList} />;
}
