


var Education = React.createClass({
  render: function() {
    return (
     <div className="b-content">
      <h2 className="b-content__title">Резюме</h2>
      <p className="b-resume row">
        <div className="b-resume-education col-lg-6 col-md-6 col-sm-12 col-xs-12"><span className="b-resume-education__name b-resume-education__line">Добытин Александр</span><span className="b-resume-education__age b-resume-education__line">26 лет</span><span className="b-resume-education__vers b-resume-education__line">Тюменский Государственный Нефтегазовый Университет</span><span className="b-resume-education__course b-resume-education__line">Автоматизации Систему Обработки Информации и Управления</span><span className="b-resume-education__quality b-resume-education__line">Инженер программист</span></div>
        <div className="b-resume-education col-lg-6 col-md-6 col-sm-12 col-xs-12"><span className="b-resume-education__name b-resume-education__line">Фронт-энд разработчик</span><span className="b-resume-education__age b-resume-education__line">с 1.03.2015 по настоящее время</span><span className="b-resume-education__vers b-resume-education__line">Echo-company</span><span className="b-resume-education__vers b-resume-education__line">г.Тюмень</span></div>
      </p>
    </div>
    );
  }
});

var Exp = React.createClass({
  getInitialState:function(){
    return{
      curentData:''
    }
  },
 componentWillMount: function() {
    var sdate = new Date(2015, 2, 2, 9, 0).getTime();
    var nowData = Date.now()
    var curData = nowData - sdate;
    curData = curData/(1000*60*60*24)
   curData = Math.floor( curData);
    this.setState({curentData:curData});
    console.log(this.state.curentData)
    
  },
  render: function() {
    return (
        <div className="b-content">
      <h2 className="b-content__title">Опыт</h2>
      <div className="b-experience row">
        <div className="b-experience-time col-lg-6 col-md-6 col-sm-12 col-xs-12"><span className="b-experience-time__duration" ref='duration'>{this.state.curentData}</span><span>Дня в вэб-разработке</span><span className="b-experience-time__normal">
            <div className="glyphicon glyphicon-send"> </div><span> Полет нормальный</span></span></div>
        <div className="b-experience-portfolio col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h3 className="b-experience-portfolio__title">Последние работы :</h3>
          <div className="b-experience-portfolio__item"><a href="http://ermolaev-beer.ru/" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Пивоварня Ермолаев</span></a><span className="b-experience-portfolio__work">Фул-стэк</span></div>
         { /*<div className="b-experience-portfolio__item"><a href="http://atmyplace.ru/" rel="nofollow noopener" target="_blank" disable="disable" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Магази ЭтМайПлэйс</span></a><span className="b-experience-portfolio__work">Фронт-энд</span></div>
          */}<div className="b-experience-portfolio__item"><a href="http://tyumeco.ru/" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Пивоварня ТюмЭкоБир</span></a><span className="b-experience-portfolio__work">Фул-стэк</span></div>
            <div className="b-experience-portfolio__item"><a href="https://www.echo-company.ru/portfolio/mattress-virtuoz.htm" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Магазин Mattress virtuoz</span></a><span className="b-experience-portfolio__work">Фронт-энд + Демо</span></div>
                   <div className="b-experience-portfolio__item"><a href="http://t4l.ru/" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Магазин Технологии для жизни </span></a><span className="b-experience-portfolio__work">Фронт-энд</span></div>
        </div>l
      </div>
    </div>
    );
  }
});
var Tech = React.createClass({
  render: function() {
    return (
    <div className="b-content">
      <h2 className="b-content__title">Технологии</h2>
      <div className="b-tech row">
        <div className="b-tech__item col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <h3 className="b-tech__title">Сборка</h3>
          <div className="b-tech__element col-lg-12 col-md-12 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/gulp.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">GulpJs</div>
          </div>
          <div className="b-tech__element col-lg-12 col-md-12 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/jade.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Jade</div>
          </div>
          <div className="b-tech__element col-lg-12 col-md-12 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/less.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Less</div>
          </div>
        </div>
        <div className="b-tech__item col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <h3 className="b-tech__title">В работе</h3>
          <div className="b-tech__element col-lg-6 col-md-6 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/bootstrap.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Bootstrap </div>
          </div>
          <div className="b-tech__element col-lg-6 col-md-6 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/jquery.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Jqurey</div>
          </div>
          <div className="b-tech__element col-lg-6 col-md-6 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/css.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">CSS3</div>
          </div>
          <div className="b-tech__element col-lg-6 col-md-6 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/html.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">HTML5</div>
          </div>
          <div className="b-tech__element col-lg-6 col-md-6 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/ajax.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Ajax</div>
          </div>
          <div className="b-tech__element col-lg-6 col-md-6 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/js.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Javascript (average)</div>
          </div>
        </div>
        <div className="b-tech__item col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <h3 className="b-tech__title">В освоении</h3>
          <div className="b-tech__element col-lg-12 col-md-12 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/react.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">ReactJS</div>
          </div>
          <div className="b-tech__element col-lg-12 col-md-12 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/webgl.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">WebGl/Canvas</div>
          </div>
          <div className="b-tech__element col-lg-12 col-md-12 col-sm-4 col-xs-6">
            <div className="b-tech__icon"><img src="images/js.png" className="b-tech__pix"/></div>
            <div className="b-tech__name">Javascript (advanced)</div>
          </div>
        </div>
      </div></div>
    );
  }
});
var Contact= React.createClass({
  getInitialState:function(){
    return{
    sendMail:'',
    submitMail:''
  }
  },
  onChangeMail:function(){
    var text = ReactDOM.findDOMNode(this.refs.textarea).value;
    text.length > 3 ? this.setState({submitMail:'b-contact-form__enable'}) :''
  },
  onSubmitMail:function(e){
    e.preventDefault();
    this.setState({sendMail:true})
  },
  render: function() {
    return (
       <div className="b-content">
      <h2 className="b-content__title">Контакты </h2>
    <div className="b-contact">
      { /*div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <form className = {this.state.sendMail ?  'b-contact-form b-contact-form--send ':'b-contact-form '}>
            <textarea placeholder="Можете что ни будь мне написать" onChange={this.onChangeMail}  ref="textarea" className="b-contact-form__input"></textarea>
            <button onClick={this.onSubmitMail} className={ 'b-contact-form__button '  +  this.state.submitMail }>Отправить письмо</button>
          </form>
          <div className={this.state.sendMail ? 'b-contact-form__done  b-contact-form__enable':'b-contact-form__done '}>
            <h3 className="b-contact-form__title">Я это прочитаю. И отвечу, если вы не забыли оставить контактные данные</h3>
          </div>
        </div>*/}
        <div className="b-contact-adres col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="b-experience-portfolio__item"><a href="https://vk.com/ommmmmmmmmmmm" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Вконтакте</span></a></div>
          <div className="b-experience-portfolio__item"><a href="https://www.facebook.com/profile.php?id=100011023278862" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-link"></div><span className="b-experience-portfolio__name"> Фэйсбук</span></a></div>
          <div className="b-experience-portfolio__item"><a href="mailto:sibsubtech@gmail.com" rel="nofollow noopener" target="_blank" className="b-experience-portfolio__link">
              <div className="glyphicon glyphicon-envelope"></div><span className="b-experience-portfolio__name"> Sibsubtech@gmail.com</span></a></div>
        </div>
      </div>
      </div>
    );
  }
});

var App = React.createClass({
   getInitialState: function() {

      return{
       currentVal:'general'
      }
   },
   setGeneral:function(val){
     this.setState({
           currentVal:'general'
          });
   },
   setEducation:function(val){
     this.setState({
           currentVal:'education'
          });
   },
   setTech:function(val){
     this.setState({
           currentVal:'tech'
          });
   },
   setExp:function(val){
     this.setState({
           currentVal:'exp'
          });
   },
    setContact:function(val){
     this.setState({
           currentVal:'contact'
          });
   },
    render: function() {
      return (
        <div className ="b-app">
            <div className="b-header">
              <h1 className={'b-header__title' +( this.state.currentVal=='general' ? '':' b-header__title--active') } onClick={this.setGeneral}><span className="b-header__title hidden-sm hidden-xs">Домашняя страница Александра Добытина</span><span className="b-header__title hidden-lg hidden-md">Дом-страница Александра Добытина</span></h1>
             <div className={'b-header__pix  ' + (this.state.currentVal=='general' ? '':'b-header__pix--hide') }></div>
              <div className="b-navigation">
              <div onClick={this.setEducation} className="b-navigation__element col-lg-3 col-md-3 col-sm-6 col-xs-6"><a href="#education" className="b-navigation__link s-navigation__link">Резюме</a></div>
              <div onClick={this.setExp} className="b-navigation__element col-lg-3 col-md-3 col-sm-6 col-xs-6"><a href="#exp" className="b-navigation__link s-navigation__link">Опыт</a></div>
              <div onClick={this.setTech} className="b-navigation__element col-lg-3 col-md-3 col-sm-6 col-xs-6"><a href="#tech" className="b-navigation__link s-navigation__link">Технологии</a></div>
              <div onClick={this.setContact} className="b-navigation__element col-lg-3 col-md-3 col-sm-6 col-xs-6"><a href="#contact" className="b-navigation__link s-navigation__link">Контакты</a></div>
            </div>
          </div>
         {(this.state.currentVal=='education'? <Education / >: '')}
         {(this.state.currentVal=='exp'? <Exp / >: '')}
         {(this.state.currentVal=='tech'? <Tech / >: '')}
         {(this.state.currentVal=='contact'? <Contact / >: '')}
        </div>
      );
    }
 });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);