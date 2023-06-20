import { useState } from "react";
const userdatas = [
  {
    id: 1,
    name: "Ajay",
    designation: "Intern   ",
    emailId: "ajay@gmail.com   ",
  },
  {
    id: 2,
    name: "Harsha",
    designation: "Intern   ",
    emailId: "hasrsha@gmail.com  ",
  },
  {
    id: 3,
    name: "Sravan",
    designation: "Intern   ",
    emailId: "sravan@gmail.com  ",
  },
  {
    id: 4,
    name: "Hafeez",
    designation: "Intern   ",
    emailId: "haffesz@gmail.com   ",
  },
  {
    id: 5,
    name: "Vikram   ",
    designation: "Intern    ",
    emailId: "vikki@gmail.com    ",
  },
];

function UserList({ handleCheckboxClick}) {
  return userdatas.map((user) => {
    return (
      <>
        <ul key={user.id}>
          <div className="userdata">{user.name}</div>
          <div className="userdata">{user.designation}</div>
          <div className="userdata">{user.emailId}</div>
          <input
            type="checkbox"
            className="checkbox"
            onClick={(event) => handleCheckboxClick(event, user.id)}
          ></input>
        </ul>
      </>
    );
  });
}
// const selectedlist =Allchecked
export function ShowUserList({ handleCheckboxClick }) {
  return (
    <>
      <UserList handleCheckboxClick={handleCheckboxClick} />
    </>
  );
}

export function Displayselectedlist({ selectedUsers }) {
  // console.log(selectedUsers);
  return selectedUsers.map((select) => {
    return (
      <ul>
        <div className="updatedata">{select.name}</div>
        <div className="updatedata">{select.designation}</div>
        <div className="updatedata">{select.emailId}</div>
      </ul>
    );
  });
}

export function Application() {
  const [displayUsers, setDisplayUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([userdatas]);
  function handleCheckboxClick(event, name) {
    const { checked } = event.target;
    console.log(id);
    if (checked) {
      // setSelectedUsers(selectedUsers.filter((x) => x.id !== id));
      setSelectedUsers(
        selectedUsers.filter((user) => {
          if (user.id === id) return true;
          return false;
        })
      );
    } else {
      setSelectedUsers((pre) => [...pre, selectedUsers]);
    }
    console.log(selectedUsers);
  }

  return (
    <div>
      <h1>
        Users
        <button type="button" onClick={() => setDisplayUsers(true)}>
          Add
        </button>
      </h1>
      <div>
        <h2>Invite Users</h2>
        <p>at least one member need to add </p>
        <>
          <h3>On board Users</h3>
          {displayUsers && (
            <>
              <ShowUserList handleCheckboxClick={handleCheckboxClick} />
              <Buttons
                handleAddClick={() => {
                  setDisplayUsers(false);
                }}
              />
            </>
          )}
          <>
            {!displayUsers && (
              <Displayselectedlist selectedUsers={selectedUsers} />
            )}
          </>
        </>
      </div>
    </div>
  );
}

export function Buttons({ handleAddClick }) {
  return (
    <div>
      <div>
        <button type="button" className="cancelbutton">
          Cancel
        </button>
        <button
          type="button"
          className="addbutton"
          onClick={() => handleAddClick()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

// const [Allchecked, setAllChecked] = useState([]);
// function handleChange(e) {
//    if (e.target.checked) {
//       setAllChecked([...Allchecked, e.target.value]);
//    } else {
//       setAllChecked(Allchecked.filter((item) => item !== e.target.value));
//    }

// / function handleChange(e) {
//    if (e.target.checked) {
//     return(
//     userdatas.filter((item) => item !== e.target.value))
//    }
// }
