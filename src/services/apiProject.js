import { db } from "./firebase";
import { ref, get, update } from "firebase/database";

export async function getProjects() {
  try {
    const projectsRef = ref(db);

    const snapshot = await get(projectsRef);

    if (snapshot.exists()) {
      const projectsData = snapshot.val();
      const projectsArray = Object.keys(projectsData).map((key) => ({
        id: key,
        ...projectsData[key],
      }));

      return projectsArray;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error while getting projects from firebase", error);
    throw error;
  }
}

export async function incrementLoves(projectId, type) {
  try {
    // 1, get the reference of the project
    const projectRef = ref(db, `${projectId}`);

    // 2, get the current value of likes or loves
    const snapshot = await get(projectRef);
    const currentAmount = snapshot.val()[type];

    // 3, increment the current value by 1
    const newAmount = currentAmount + 1;

    // 4, create a new object to submit
    const updateData = { [type]: newAmount };

    // 5, submit the new object
    await update(projectRef, updateData);

    console.log(`Increment ${type} to the project ${projectId} successfully`);
  } catch (error) {
    console.error("Error while incrementing reaction", error);
    throw error;
  }
}
