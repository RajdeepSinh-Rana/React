import './Main.css'
// import img from './img'
function Main(){
    return (
        <div className='main'>
            <header>
        <div class="logo">
                <img src="img/logo.png.webp" alt=""/>
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Games</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Forums</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        <div class="login">
            <a href="">Login / Register</a>
        </div>
    </header>
    <div class="item1">
        <div class="container1">
            <h1>The Best <span class="span1">Games</span> Out There</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
                lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
                Suspendisse cursus faucibus finibus.</p>
            <button>Read More</button>
        </div>
    </div>

    <div class="product">
        <div class="product1">
            <div class="productbox">
                <div class="boxtex">
                    <h5>Suspendisse ut justo tem por, rutrum</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="productbox2">
                <div class="boxtex">
                    <h5>Justo tempor, rutrum erat id, molestie</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="productbox3">
                <div class="boxtex">
                    <h5>Nullam lacinia ex eleifend orci porttitor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div class="productbox4">
                <div class="boxtex">
                    <h5>Lacinia ex eleifend orci suscipit</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="recent">
        <h1>Recent Games</h1>
        <div class="recentsic1">
            <div class="recentbox">
                    <div class="recentimg">
                        <img src="img/a1.jpg (1).webp" alt=""/>
                    </div>
                    <div class="recenttex">
                        <h5>Suspendisse ut justo tem por, rutrum</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                    </div>
            </div>
            <div class="recentbox">
                <div class="recentimg">
                    <img src="img/a2.webp" alt=""/>
                </div>
                <div class="recenttex">
                    <h5>Suspendisse ut justo tem por, rutrum</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                </div>
        </div>
        <div class="recentbox">
            <div class="recentimg">
                <img src="img/a2.jpg" alt=""/>
            </div>
            <div class="recenttex">
                <h5>Suspendisse ut justo tem por, rutrum</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
            </div>
    </div>
    </div>
    </div>
        <div class="tournaments">
                <div class="tourbox">
                    <div class="tourimg"> <img src="img/a4.jpg (1).webp" alt=""/></div>
                    <div class="tourtex">
                        <h4>World Of WarCraft</h4>
                        <ul>
                            <li>  <span>Tournament Beggins:</span> June 20, 2018</li>
                            <li>  <span>Tounament Ends:</span>  July 01, 2018</li>
                            <li><span>Participants:</span> 10 teams</li>
                            <li><span>Tournament Author:</span> Admin</li>
                        </ul>
                        <p><span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd place: $500</p>
                    </div>
                </div>
                <div class="tourbox">
                    <div class="tourimg"> <img src="img/a2.jpg" alt=""/></div>
                    <div class="tourtex">
                        <h4>DOOM</h4>
                        <ul>
                            <li>  <span>Tournament Beggins:</span> June 20, 2018</li>
                            <li>  <span>Tounament Ends:</span>  July 01, 2018</li>
                            <li><span>Participants:</span> 10 teams</li>
                            <li><span>Tournament Author:</span> Admin</li>
                        </ul>
                        <p><span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd place: $500</p>
                    </div>
                </div>
        </div>
        <footer>
            <div class="footerbg">
                <div class="logo">
                    <img src="img/logo.png.webp" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
                </div>
                <div class="footerpng">
                    <img src="img/footer-top-bg.png.webp" alt=""/>
                </div>
            </div>
           <div class="footersic2">
            <div class="posts">
                <h3>Latest Posts</h3>
                <div class="postsbox">
                    <div class="postimg"> <img src="img/blog1.webp" alt=""/></div>
                    <div class="posttex">
                        <h5>June 21, 2018</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum</p>
                        <span id="po">By Admin</span>
                    </div>
                </div>
                <div class="postsbox">
                    <div class="postimg"> <img src="img/blog2.webp" alt=""/></div>
                    <div class="posttex">
                        <h5>June 21, 2018</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum</p>
                        <span id="po">By Admin</span>
                    </div>
                </div>
                <div class="postsbox">
                    <div class="postimg"> <img src="img/blog3.webp" alt="" /></div>
                    <div class="posttex">
                        <h5>June 21, 2018</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum</p>
                        <span id="po">By Admin</span>
                    </div>
                </div>
            </div>
           </div>
        </footer>
           <div class="foo">
            <p>Copyright ©2023 All rights reserved |  Created By: Rana Rajdeep Sinh</p>
           </div>
        </div>
    )
}
export default Main