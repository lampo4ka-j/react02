import './App.css';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className='app-wrapper'>
      
      <header className='header'>
        <img width='105px' height='105px' src='https://i.pinimg.com/originals/5a/ae/50/5aae503e4f037a5a4375944d8861fb6a.png' />
      </header>
      <div className='center-wrapper'>
        <div className='sidebar'>
          <nav className='nav'>
            <ul>
              <a href='#'><li>Profile</li></a>
              <a href='#'><li>Message</li></a>
              <a href='#'><li>News</li></a>
              <a href='#'><li>Music</li></a>
              <a href='#'><li>Settings</li></a>
            </ul>
          </nav>
        </div>
        <div className='content'>
          <div className='profile' >
            <div className='img-wrapper'>
              <img height='100px' width='900px' src='https://avatars.mds.yandex.net/i?id=4d961d2098fb6bed147ff48ad77d8ef9-5185538-images-thumbs&n=13&exp=1' />
            </div>
            <div className='personal-block'>
              <div className='avatar'>
                <img height='150px' width='150px' src='https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg' />
              </div>
              <div className='info'>
                <span className='name'>Sasha K.</span>
                <span> fdsfsdff </span>
              </div>
            </div>
          </div>

          <div className='form-post'>
            <span className='name-post' >My posts</span>
            <form method='GET'>
              <textarea placeholder='your news...' ></textarea>
              <input type='submit' />
            </form>
          </div>

          <div className='posts'>
            <div className='post-logo' ></div>
            <span className='post-text' >Hey? why nobody love me?</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
