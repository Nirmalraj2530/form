import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import img from './signinimg.png';
import './formjson.css';
const data = {
    "form":{
        "section":[
            {
                "Section_title":"Sign Up",
                "felid":[
                    {
                        "name":"name",
                        "label":"Name",
                        "placeholder":"Enter The Name",
                        "required":true,
                        "data_type":"string",
                        "html_element":"textbox"
                    },
                    {
                        "name":"email",
                        "label":"Email",
                        "placeholder":"Enter The Email",
                        "hidden":false,
                        "required":true,
                        "data_type":"string",
                        "html_element":"email"
                    },
                    {
                        "name":"Phone",
                        "label":"Phone",
                        "placeholder":"Enter The Phone",
                        "required":true,
                        "data_type":"number",
                        "html_element":"textbox"
                    },
                    {
                        "name":"password",
                        "label":"Password",
                        "placeholder":"Enter The Password",
                        "required":true,
                        "data_type":"string",
                        "html_element":"password"
                    }
                ]
            }
        ]
    }
}

export default function Formjson() {
    const onSubmit=(e)=>{
    }
  return (
    <div className='container-fulid bgimage'>
        <div className='row'>
    <div className='col-lg-2 '>&nbsp;</div>
        <div className='col-lg-8 mt-5'>
            <div className='bg-white bxshow'>
                 <div className='col-lg-12 bg-white'>
                    <div className='row'>
                        <div className='col-lg-6 '>
                            <img src={img} className="img-fluid mt-5" alt=''/>
                             <p className='text-center mt-5'><b>Thanks to  team for this wonderful system.<br></br>
                                   I had been using a traditional software system before,<br></br></b></p>
                        </div>
                <div className='col-lg-6 bgclr '>
                <form  className='' onSubmit={onSubmit} >
                    <p className='text-right'> Already have a account ?<u>Sign In</u></p>
                    {
                    data.form.section.map(formdata =>{
                return(
                    <div>
                        <h3 className='text-center mt-2'>{formdata.Section_title}</h3>
                        {
                            formdata.felid.map(inputdata=>{
                                return(
                                    <div>
                                        <label className='mt-2'>{inputdata.label}</label>
                                        <input type={inputdata.html_element} name={inputdata.name} 
                                        required={inputdata.required} data_type={inputdata.data_type} 
                                        placeholder={inputdata.placeholder} className='form-control ' />
                                    </div>
                                )

                            })
                        }
                    </div>
                )
            })
        }
                <div className='button text-center'>
                    <button className='btn btn-danger button1 my-2' type="onSubmit">Signup</button>
                    </div>
                        <p className='text-center'>(or)</p>
                        <div className='button text-center'>
                        <button className='btn btn-primary  button1 my-1' type="onSubmit">Signin</button>
                    </div>
                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className='col-lg-3'>&nbsp;</div>
            </div>
    </div>
  )
}
 