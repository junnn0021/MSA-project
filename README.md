## Team F

박민혁 : [Park-Seaweed](https://github.com/Park-Seaweed) | 이준석 : [junnn0021](https://github.com/junnn0021) | 이혜정 : [hyezzang](https://github.com/hyezzang) | 
 --- | --- | --- | 

- Duration : 2022.12.23~23.12.27
<br>

## Requirement

#### 요구사항 1 : 재고부족으로 인한 구매실패에 대한 조치
Sales API 를 통해 요청을 받은 서버가 데이터베이스에서 재고 상황을 확인합니다.
재고가 있다면 감소시키고 응답으로 판매완료 내용을 전달합니다.
재고가 없는 경우 공장에 주문을 진행합니다
재고가 없다는 내용을 담은 메세지 페이로드가 주제별로 생성됩니다.
메세지가 느슨하게 연결된 시스템을 통해 처리될 수 있도록 따로 보관됩니다.

#### 요구사항 2 : 메세지 누락 상황에 대한 조치
빈번한 요청으로 메세지 누락이 발생합니다.
메세지가 처리되지 않은 경우 메세지들을 체계적으로 관리할 다른 처리 공간을 생성해야합니다.
메시지 처리 보관 리소스와 처리되지 않은 메세지 처리 리소스가 연결되어야합니다.

#### 요구사항 3 : Legacy 시스템(Factory → Warehouse) 성능문제에 대한 조치
안정적으로 이벤트가 전달 될 수 있는 시스템을 구축해야합니다.
메세지를 소비하는 리소스를 통해 Factory API가 호출됩니다.
수신된 메세지에 의해 트리거가 된 컴퓨팅 리소스가 상품 재고를 증가시킵니다.

<br>

## Summary
<노티드>는 온라인으로 도너츠를 판매합니다.<p>
웹사이트를 통해서 주문 버튼을 누르는 것으로 구매(Sales API)가 가능합니다.<p>
창고에 재고가 있다면 재고가 감소하고 구매가 완료됩니다.<p>
유명 유튜버가 도넛-스테이츠의 도너츠가 맛있다고 영상을 올렸습니다.<p>
그를 따르는 데브옵스 수강생들이 몰려듭니다. 주문이 급등합니다.<p>
창고에 재고가 없기 때문에 구매가 불가능한 경우가 발생합니다.<p>
창고의 도너츠 재고가 다 떨어지면 제조 공장에 알려서 다시 창고를 채우는 시스템을 구축해야합니다.<p>
제조 공장인 <노티드 팩토리>에 주문을 요청(Leagcy Factory API)할 수 있습니다.<p>
주문이 요청되면 일정 시간이 지난 후 창고에 재고가 증가합니다.

<br>

## Architecture

![image](https://github.com/junnn0021/automatic-inventory-increase/assets/119108967/648d7195-9638-4212-a7f4-278f028e2ff1)
- 아키텍처 구현 과정 : [Notion](https://www.notion.so/Project_Docker-K8s-df3fec7282fb4ad2883eaececfec8687)

<br>

## Environment
<img src="https://img.shields.io/badge/AWS-232F3E?style=stylefor-the-badge&logo=Amazon AWS&logoColor=FAFAFA"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=stylefor-the-badge&logo=JavaScript&logoColor=000000"/>
<img src="https://img.shields.io/badge/Express-000000?style=stylefor-the-badge&logo=Express&logoColor=FAFAFA"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=stylefor-the-badge&logo=MySQL&logoColor=FAFAFA"/>
<img src="https://img.shields.io/badge/Serverless-FD5750?style=stylefor-the-badge&logo=Serverless&logoColor=FAFAFA"/>
<br>

	이러한 경험으로 앞으로는 단순히 장점에만 집중하지 않고 폭넓게 바라봐야겠다는 생각이 들었다.


	많은 것을 배웠지만 아직도 서버리스 아키텍처에 대한 더 깊은 이해가 필요하다는 것을 느꼈고,특히 마이크로서비스 아키텍쳐를 구성하고 관리하는 것에 대해 더 많은 학습이 필요다고 생각들었다.

	이번 프로젝트를 통해 쌓은 경혐과 지식은 앞으로 서버리스 아키텍쳐를 구축하고 관리하는 데 큰 도움이 될 것 같다.
