//import { useRef, useContext } from 'react';
//import { useHistory } from 'react-router-dom';

//import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
const ProfileForm = () => {
 // const history = useHistory();

 // const newNameInputRef = useRef();
 // const newUrlInputRef = useRef();
 // const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

   // const enteredNewName = newNameInputRef.current.value;
   // const enteredNewUrl = newUrlInputRef.current.value;

    // add validation
    return (
      <section className={classes.action}>
        <form >
          <div className={classes.action}>
            <label htmlFor='username'>full name</label>
            <input type='username' id='username' required />
          </div>
          <div className={classes.action}>
            <label htmlFor='url'>profile photo URL</label>
            <input
              type='url'
              id='url'
              required
            />
            </div>
            <div className={classes.action}>
              <button>update</button>
          </div>
          </form>
          </section>
    )
  }}
  export default ProfileForm;

   