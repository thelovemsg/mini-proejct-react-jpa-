import axios from "axios";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function serverSidePage({ todos }) {
  return (
    <>
      <div className={styles.grid}>
        {todos?.length === 0 ? (
          <div>Loading...</div>
        ) : (
          todos?.map((todo) => (
            <div key={todo.id}>
              <p>
                {todo.id} : {todo.title}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: { todos: data },
  };
}
