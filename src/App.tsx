import React, {FC} from 'react';
import './App.css';
import Dog  from './components/Dog'

const App: FC = () => {
  return (
      <div className="App">
        <h1>DOGS</h1>
        <Dog fname={'Mikle'}
              lname={'PSINA'}
              img={'https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg'}

        >
        </Dog>

        <Dog fname={'Mig'}
              lname={'DIRAVIY'}
              img={'https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg'}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus itaque nam sunt tempora? Ab
            ad amet animi atque consectetur, consequuntur culpa cumque debitis dicta eaque error est explicabo,
            illum impedit laboriosam laudantium libero magni nemo nulla, numquam quasi qui quo rem repudiandae
            sapiente sequi tempore temporibus veritatis voluptas voluptate!</p>
        </Dog>
        {/*<Comp fname='Mikle' lname='Chort'></Comp>*/}
        {/*<Comp lname={{'A': 1}}></Comp>*/}
        {/*<Comp lname={10}></Comp>*/}
        {/*{Comp('Mikle')}*/}
        {/*{Comp(4308)}*/}

      </div>
  );
}

export default App;
