export const dynamic = "force-dynamic";

import TaskOverView from "@/components/task-overview";

async function fetchListOfTasks() {
  try {
    const apiResponse = await fetch(`/api/get-tasks`, {
      method: "GET",
      cache: "no-store",
    });

    if (!apiResponse.ok) throw new Error("Failed to fetch");

    const result = await apiResponse.json();
    return result?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Tasks() {
  const taskList = await fetchListOfTasks();
  return <TaskOverView taskList={taskList} />;
}
