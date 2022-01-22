import { useState } from 'react';
import { User, AppProps } from './interfaces';

const defaultFormData = {
  title: '',
  body: '',
};

function App({ headerText, extraText = 'default text' }: AppProps) {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;
  // ! using a union type to define whether to call a user or leave it null
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      id: 1,
      name: 'Clem',
      age: 23,
      country: 'UK',
      address: {
        street: 'main street',
        number: 88,
        postCode: '12345',
      },
      admin: false,
    });
  // ! setting the change event to the input element explicitly to use it in the on change
  // ! in the return statement
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      <button onClick={fetchUser}>Fetch user on click</button>
      {user && <p>{`Welcome ${user.name}`}</p>}

      <h2>Form</h2>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        {/* when unclear what type an element is, hover over the element, here the (e) in the onChange or onSubmit to get the correct element to be declared explicitly */}
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => onChange(e)}
        />
        <br />
        <br />
        <label htmlFor="title">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}

export default App;
