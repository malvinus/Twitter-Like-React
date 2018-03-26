import React,{Component} from 'react';


class FormLogin extends Component{



	render(){
		return( 

			<div className="container">
				<div className="row" id="form-login">
					<div className="col-xs-12 col-sm-6 col-md-12">
						<form  className="form-horizontal" >
							<div className="form-group">
								<label htmlFor="email" className='form'>	E-mail:</label>
								<input type='email'  className="form form-control" id="email" placeholder="Enter email" name="email"></input>
							</div>
							<div className="form-group">
								<label htmlFor="senha" className="form">	Password:</label>
								<input type='password'  className=" form form-control" id="senha" placeholder="*******" name="senha" ></input>
							</div>


							<input type="submit" value="Login" id="btn-login"/>

						</form>


					</div>

					
				</div>

				<div className="row" id="cad-link">
					<div className="col-xs-12 col-sm-12 col-md-12">
						
							<a>Sign in</a><br/>
							<a>esqueceu o a senha , esqueci como se escreve em inglês </a>
						
					</div>
				</div>

			</div>



			);


	}

}

export default FormLogin;

