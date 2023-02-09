import '../Css/Main.css'
import '../Css/Grid.css'

function Main(props) { 
    return (
    <div className='MainWrap' id="0" >
        <section class="MainImg">
            <div class="TextBoxWrap">

                <div class="TextLWrap">
                    <div>
                        <p class="TextL">designer </p>
                        <dd>UI UX design and design systems</dd>
                    </div>
                </div>

                <div class="TextRWrap">
                    <div>
                        <p class="TextR"> <span class="font-light">&lt;</span> coder <span class="font-light">&gt;</span> </p>
                        <dd>Front end developer writs clean code, <br/>efficient code</dd>
                    </div>
                </div>

            </div>
        </section>
    </div>
  );
}

export default Main;
