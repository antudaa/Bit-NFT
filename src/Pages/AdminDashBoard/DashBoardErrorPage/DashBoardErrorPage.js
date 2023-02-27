import React from 'react';
import './DashBoardErrorPage.css';

const DashBoardErrorPage = () => {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            </div>

                            <div class="content_box_404">
                                <h3 class="h2">
                                    Your request for membership not yet accepted .
                                </h3>

                                <p>Please wait for Admin Response!</p>

                                <a href="/" class="link_404">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashBoardErrorPage;