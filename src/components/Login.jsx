
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
      const handleLogin= (e) =>{
          e.preventDefault()
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password)
          signIn(email, password)
          .then(result=>{
             const loggedUser = result.user;
             console.log(loggedUser)
             form.reset()
             navigate('/')
              
          })
          .catch(error=>{
             console.log(error)
          })
      }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <p>New to this site  Please <Link to='/register'> <button className='btn btn-link'>Register</button> </Link> </p>
    </div>
  </div>
</div> 
        </>
    );
};

export default Login;