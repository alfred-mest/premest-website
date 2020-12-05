import React, { useEffect } from 'react'
import $ from 'jquery'

import "./ButStyles.css"
function FloatingBut() {

    useEffect(() => {
        $('.btnIconn').click(function () {
            $(this).toggleClass("click");
            $('.sidebar').toggleClass("show");
        });
        $('.feat-btn').click(function () {
            $('nav ul .feat-show').toggleClass("show");
            $('nav ul .first').toggleClass("rotate");
        });
        $('.serv-btn').click(function () {
            $('nav ul .serv-show').toggleClass("show1");
            $('nav ul .second').toggleClass("rotate");
        });
        $('nav ul li').click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });

    })
    // const { JSDOM } = require( "jsdom" );
    // const { window } = new JSDOM( "" );
    // const $ = require( "jquery" )( window );
    return (
        <div>
            <div class="btnIconn">
                <span><i class="far fa-stop-circle"></i></span>
            </div>
            <nav class="sidebar">

                <ul>

                    <li>
                        <a href="#" class="feat-btn">Employment Type
                    <span class="fas fa-caret-down first"></span>
                        </a>
                        <ul class="feat-show">
                            <li> <a href="#">
                                <input type="checkbox" />
                            Full time

                        </a></li>
                            <li><a href="#">
                                <input type="checkbox" />
                            Part time

                        </a></li>

                            <li><a href="#">
                                <input type="checkbox" />
                            Remote

                        </a></li>

                            <li><a href="#">
                                <input type="checkbox" />
                            Internship

                        </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="serv-btn">Categories
                    <span class="fas fa-caret-down second"></span>
                        </a>
                        <ul class="serv-show">
                            <li><a href="#">
                                <input type="checkbox" />
                            Programming

                        </a></li>

                            <li><a href="#">
                                <input type="checkbox" />
                            Marketing

                        </a></li>

                            <li><a href="#">
                                <input type="checkbox" />
                            Others

                        </a></li>
                        </ul>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default FloatingBut
