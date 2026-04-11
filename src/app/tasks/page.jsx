export const dynamic = "force-dynamic";

import TaskOverView from "@/components/task-overview";

async function fetchListOfTasks() {
  try {
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-tasks`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    const result = await apiResponse.json();
    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Tasks() {
  const taskList = await fetchListOfTasks();
  return <TaskOverView taskList={taskList} />;
}
