import React from 'react';
import { BiLogIn } from 'react-icons/bi'
import { MdPassword } from 'react-icons/md'

function LogInPage() {
    return (
        <section className="h-100 ">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white rounded-1" >
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">ورود</h2>
                                    <p className="text-white-50 mb-5">لطفا ایمیل و رمز عبور خود را وارد نمایید</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" dir='ltr' />
                                        <label className="form-label" for="typeEmailX">ایمیل</label>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" dir='ltr' />
                                        <label className="form-label" for="typePasswordX">رمز عبور</label>
                                    </div>
                                    <p className="small pb-lg-2"><a className="text-white-50" href="#!">رمز عبور خود را فراموش کرده اید ؟</a></p>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                                        <BiLogIn />
                                        ورود
                                    </button>
                                </div>
                                <div>
                                    <p className="mb-0">حساب کاربری ندارید ؟  <a href="#!" className="text-white-50 fw-bold">ثبت نام کنید </a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LogInPage;