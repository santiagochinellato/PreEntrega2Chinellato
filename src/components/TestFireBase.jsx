import { useState, useEffect } from "react";
import { db } from "../firebase/client"; // Asegúrate de que esta ruta sea correcta
import { collection, addDoc, getDocs } from "firebase/firestore";

function TestFirebaseConnection() {
  const [connectionStatus, setConnectionStatus] = useState("No probado");

  useEffect(() => {
    async function testConnection() {
      try {
        // Intenta escribir un documento
        const docRef = await addDoc(collection(db, "test"), {
          message: "Prueba de conexión",
          timestamp: new Date(),
        });
        console.log("Documento escrito con ID: ", docRef.id);

        // Intenta leer documentos
        const querySnapshot = await getDocs(collection(db, "test"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });

        setConnectionStatus("Conectado exitosamente");
      } catch (e) {
        console.error("Error en la prueba de conexión: ", e);
        setConnectionStatus("Error en la conexión");
      }
    }

    testConnection();
  }, []);

  return (
    <div>
      <h2>Estado de la conexión a Firebase:</h2>
      <p>{connectionStatus}</p>
    </div>
  );
}

export default TestFirebaseConnection;
