import { useState } from "react";

const userdatas = [
  {
    id: 1,
    name: "Ajay",
    designation: "Intern   ",
    emailId: "ajay@gmail.com   ",
    Ischecked: false,
  },
  {
    id: 2,
    name: "Harsha",
    designation: "Intern   ",
    emailId: "hasrsha@gmail.com  ",
    Ischecked: false,
  },
  {
    id: 3,
    name: "Sravan",
    designation: "Intern   ",
    emailId: "sravan@gmail.com  ",
    Ischecked: false,
  },
  {
    id: 4,
    name: "Hafeez",
    designation: "Intern   ",
    emailId: "haffesz@gmail.com   ",
    Ischecked: false,
  },
  {
    id: 5,
    name: "Vikram   ",
    designation: "Intern    ",
    emailId: "vikki@gmail.com    ",
    Ischecked: false,
  },
];

function UserList({ handleCheckboxClick }) {
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
export function ShowUserList({ handleCheckboxClick }) {
  return (
    <>
      <UserList handleCheckboxClick={handleCheckboxClick} />
    </>
  );
}

export function Displayselectedlist({ selectedUsers }) {
  console.log(selectedUsers);
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
const selectedUsers = [];
export function Application() {
  const [displayUsers, setDisplayUsers] = useState(false);
  function handleCheckboxClick(event, id) {
    userdatas.map((user) => {
      if (event.target.checked){
        if (user.id === id) {
          selectedUsers.push(user);
          console.log(selectedUsers)
      }
      }
      else{
        delete selectedUsers[id-1]
        
      }
      return selectedUsers
    }
    
    );
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
