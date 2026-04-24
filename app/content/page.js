async function getData() {
  const res = await fetch("https://69477a99ca6715d122fa5266.mockapi.io/todos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({  }) {
  const data = await getData();
  console.log('data:', data);

  async function submitForm(formData) {
    "use server"
    console.log('Email:', formData.get('email'));
  }

  return (
    <div>
      <h1>Blog list:</h1>
      {
        data.map((item) => (
          <div key={item.id}>
            {item.id} {item.name}
          </div>
        ))
      }

      <form action={submitForm}>
        Email: <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}