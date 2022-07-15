//import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import StartingPageContent from '../StartingPage/StartingPageContent';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>complete your Profile</h1>
      <section className={classes.profile}>
        <form >
          <div className={classes.profile}>
            <label htmlFor='username'>full name</label>
            <input type='username' id='username' required />
          </div>
          <div className={classes.profile}>
            <label htmlFor='url'>profile photo URL</label>
            <input
              type='url'
              id='url'
              required
            />
            </div>
            <div className={classes.profile}>
              <button>update </button>
              </div>
              <div className={classes.profile}>
              <button onClick={() => {<StartingPageContent/>}}>cancel</button>

          </div>
          </form>
          </section>
    
      
    </section>
  );
};

export default UserProfile;