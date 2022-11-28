import { login, logout } from "../../../../../firebase";

export const NicklogoLogin = ({user, isLoginUser}) =>{

    return !isLoginUser ? (
            <div >
            {user ? (
                <div  className="Nicklogo-dropdown">
                    <div>
                        <p className='textNick' onClick={logout}>Login OFF</p>
                    </div>
                </div>
            ) : (
                <div className="Nicklogo-dropdown">
                    <div>
                        <p className='textNick' onClick={login}>Login </p>
                    </div>
                </div>
            )} 
            </div>)  : (
              <>
              </>
      );

};
