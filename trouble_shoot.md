웹팩 로더에서 커피스크립트를 로딩할 수 있는 로더 모듈을 설정하는 부분에서 매뉴얼대로 설정을 완료후 빌드를 실행하였으나, 에러를 뱉
음ERROR in Cannot find module 'coffeescript'@ ./app.js 4:18-49
1. 모듈에러인데 분명히 설치했는데 계속 에러가 나서 코드를 잘못 작성한줄 알고 체크해보았지만 코드는 정상이었다. 모듈이름이 업데이트되면서 바뀌었나보다. babel-core, babel-loader, babel-preset-es2015를 설치하는데 버전을 지정해주지 않고 설치하니까 웹팩이랑 디펜던시 문제로 에러가 남 웹팩 1.14 즉 지금 사용하고 있는 버전에서는 babel-loader를 6으로 설치해야 됨 babel-core도 6으로 설치해야함 강의랑 모듈이 좀 달라서 체크하면서 해야함
해결 방법: 깃허브에 올라와있는 package.json 의 내용을 보고 버전을 맞춰서 설치 한다.

2. entry에 파일을 바꾸고 yarn run webpack을 했는데 계속 sass가 css로 안바뀌어서 왜그런가 했다. 당연히 entry에 자바스크립트 파일에 scss파일은 아무것도 없으니까 빌드가 안되었던 거였다. 빌드하기전에 꼭 entry를 확인하고 할 것