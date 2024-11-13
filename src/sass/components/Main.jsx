import React from 'react'
import workImg from '../images/work_img.png'

const Main = () => {
  return (
    <main className='Main'>
      <div class="work_box">
        <div class="work_card">
          <img src={workImg} alt="" />
          <h3 class="work_title">Чиланзар</h3>
          <p class="work_text">Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в
            1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить
            первое негативное изображение в 1835 году </p>
          <a href="#!" class="work_link">Посмотреть</a>
        </div>
      </div>
    </main>
  )
}

export default Main
