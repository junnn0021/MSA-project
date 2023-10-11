## Team F

이준석 : [junnn0021](https://github.com/junnn0021) | 박민혁 : [Park-Seaweed](https://github.com/Park-Seaweed) | 이혜정 : [hyezzang](https://github.com/hyezzang) | 
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
우리 페이지는 **도서 구매 예약 시스템**을 운영합니다.<p>사용자는 페이지 접속 후, 사용자 정보와 구매할 도서 정보를 입력하게 됩니다.

서버는 **Docker image를 이용하여 K8s를 구축**했습니다.

데이터베이스는 **GCP를 이용하여 구축**했습니다.

(현 프로젝트는 제공받은 Petclinic 코드를 일부 수정하여 진행했습니다.)

<br>

## User Flow
![image](https://github.com/junnn0021/book-reservation/assets/119108967/d665cb98-ed5d-4883-b7ab-16f719fbde96)

<br>

## Architecture

![image](https://github.com/junnn0021/book-reservation-k8s/assets/119108967/ff699c5b-d883-4641-861c-37392320b74a)
- 아키텍처 구현 과정 : [Notion](https://www.notion.so/Project_Docker-K8s-df3fec7282fb4ad2883eaececfec8687)

<br>

## Environment
<!--<div align=center>-->
<img src="https://img.shields.io/badge/GCP-4285F4?stylefor-the-badge&logo=Google Cloud&logoColor=FAFAFA"/> <img src="https://img.shields.io/badge/Docker-2496ED?stylefor-the-badge&logo=Docker&logoColor=FAFAFA"/> 
<img src="https://img.shields.io/badge/Kubernetes-326CE5?stylefor-the-badge&logo=Kubernetes&logoColor=FAFAFA"/> 
<img src="https://img.shields.io/badge/BigQuery-669DF6?stylefor-the-badge&logo=Google BigQuery&logoColor=FAFAFA"/> 
<img src="https://img.shields.io/badge/Looker-4285F4?stylefor-the-badge&logo=Looker&logoColor=FAFAFA"/> 
<img src="https://img.shields.io/badge/Apache-D22128?stylefor-the-badge&logo=Apache&logoColor=FAFAFA"/>
<img src="https://img.shields.io/badge/Tomcat-F8DC75?stylefor-the-badge&logo=Apache Tomcat&logoColor=000000"/>
<img src="https://img.shields.io/badge/Maven-C71A36?stylefor-the-badge&logo=Apache Maven&logoColor=FAFAFA"/>
<img src="https://img.shields.io/badge/JMeter-D22128?stylefor-the-badge&logo=Apache JMeter&logoColor=FAFAFA"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=stylefor-the-badge&logo=MySQL&logoColor=FAFAFA"/>

<!--</div>-->
<br>

## Prerequisites

아래 주어진 과정을 실행해야 합니다.


## 👏 프로젝트 소개

### <노티드>는 온라인으로 도너츠를 판매합니다.
### 웹사이트를 통해서 주문 버튼을 누르는 것으로 구매(Sales API)가 가능합니다.
### 창고에 재고가 있다면 재고가 감소하고 구매가 완료됩니다.
### 유명 유튜버가 도넛-스테이츠의 도너츠가 맛있다고 영상을 올렸습니다.
### 그를 따르는 데브옵스 수강생들이 몰려듭니다. 주문이 급등합니다.
### 창고에 재고가 없기 때문에 구매가 불가능한 경우가 발생합니다.
### 창고의 도너츠 재고가 다 떨어지면 제조 공장에 알려서 다시 창고를 채우는 시스템을 구축해야합니다.
### 제조 공장인 <노티드 팩토리>에 주문을 요청(Leagcy Factory API)할 수 있습니다.
### 주문이 요청되면 일정 시간이 지난 후 창고에 재고가 증가합니다.


<br>
<br>
<br>
<br>



<br>
<br>



## 🙌 서비스 아키텍쳐

![MSA](https://user-images.githubusercontent.com/106081707/222883840-ac237ceb-4224-40c9-96df-e3d10491f2ef.png)

<br>
<br>
<br>


<details>
    <summary><strong>💡 클라이언트의 요구 사항</strong></summary>


- 요구사항 1 : 재고부족으로 인한 구매실패에 대한 조치
Sales API 를 통해 요청을 받은 서버가 데이터베이스에서 재고 상황을 확인합니다.
재고가 있다면 감소시키고 응답으로 판매완료 내용을 전달합니다.
재고가 없는 경우 공장에 주문을 진행합니다
재고가 없다는 내용을 담은 메세지 페이로드가 주제별로 생성됩니다.
메세지가 느슨하게 연결된 시스템을 통해 처리될 수 있도록 따로 보관됩니다.

- 요구사항 2 : 메세지 누락 상황에 대한 조치
빈번한 요청으로 메세지 누락이 발생합니다.
메세지가 처리되지 않은 경우 메세지들을 체계적으로 관리할 다른 처리 공간을 생성해야합니다.
메시지 처리 보관 리소스와 처리되지 않은 메세지 처리 리소스가 연결되어야합니다.

- 요구사항 3 : Legacy 시스템(Factory → Warehouse) 성능문제에 대한 조치
안정적으로 이벤트가 전달 될 수 있는 시스템을 구축해야합니다.
메세지를 소비하는 리소스를 통해 Factory API가 호출됩니다.
수신된 메세지에 의해 트리거가 된 컴퓨팅 리소스가 상품 재고를 증가시킵니다.
</details>
<br>

<details>
    <summary><strong>💡 SNS와 SQS를 쓰는 이유</strong></summary>


Amazon SNS (Simple Notification Service)과 Amazon SQS (Simple Queue Service)는 AWS에서 제공하는 서비스로, 둘 다 분산 시스템에서 메시지를 전송하고 처리하는 데 사용됩니다.

SNS는 메시지를 발행하고, 구독자에게 해당 메시지를 전송하는 역할을 합니다. 반면에 SQS는 메시지를 수신하고 처리하기 위해 대기열에 저장하는 역할을 합니다. 따라서 SNS는 특정 이벤트가 발생했을 때 다른 시스템에 이를 통지하기 위해 사용되고, SQS는 이러한 이벤트에 대한 메시지를 처리하고 응용 프로그램에서 해당 이벤트에 대한 작업을 수행할 수 있도록 지원합니다.

SNS와 SQS를 함께 사용하는 이유는 다음과 같습니다.

- 확장성: SNS 및 SQS는 모두 AWS의 분산 아키텍처를 기반으로 하여 확장성이 뛰어나므로 대규모 메시지 처리를 지원할 수 있습니다.

- 탄력성: SNS 및 SQS를 함께 사용하면 이벤트 처리 및 메시지 처리의 실패 시스템의 탄력성이 향상됩니다. 예를 들어, SQS 대기열에서 메시지를 처리하는 응용 프로그램이 다운되는 경우 SNS는 다른 처리 응용 프로그램으로 메시지를 라우팅하여 처리를 계속할 수 있습니다.

- 비동기 처리: SNS와 SQS는 모두 비동기 메시지 처리를 지원합니다. 이는 애플리케이션에서 데이터베이스 또는 외부 서비스와 같은 다른 작업을 처리하는 동안 이벤트 및 메시지를 대기열에 보내고 처리할 수 있다는 것을 의미합니다.

따라서, SNS와 SQS를 함께 사용하면 이벤트 및 메시지 처리를 더욱 효율적으로 처리할 수 있으며, 탄력성과 확장성이 뛰어난 분산 시스템을 구성할 수 있습니다.
</details>
<br>
<details>
    <summary><strong>💡 박민혁 회고</strong></summary>


![스크린샷 2023-03-05 오후 2 18 25](https://user-images.githubusercontent.com/106081707/222943559-3363be84-f57d-4390-b9ab-ed391525163a.png)

처음에 이부분에서 그림과같은 코드가아닌 JSON.parse(event.Records[0].body.MessageAttributes) 이런식으로 했더니 
![스크린샷 2023-02-22 오전 9 47 12](https://user-images.githubusercontent.com/106081707/220491906-89e276dd-3c52-4135-b51d-c405e4f59c7b.png)

아래와 같은 에러가 발생했었습니다... 생각을 해보니까 이미 body값을 파싱했는데  내부 데이터를 다시 파싱하려니까 생겼던 문제였습니다 그래서 위와 같은 코드로 바꾸니 문제 해결 
다이어그램을 만들어 놓고 제대로 설명하지를 못함..
![project3](https://user-images.githubusercontent.com/106081707/220493687-bb2f5644-8191-49b5-a1f0-4983e63647bd.png)
다이어그램을 확인해보면 sns에서 3개의 sqs 대기열이 존재하는데 운영팀은 sns를 따로 만들어서 sqs대기열을 추가해줘야했었다 운영팀은 전번적인 정보들을 받아야하는데 sales람다에서 이벤트로 넘어가는게 제고가 0일때 넘어가는거여서 아닐 때도 넘어가게 만들었어야했다 그런점을 생각하지 못하고 하나의 sns로 처리할려했다... 이문제에서 느낀점으로는 람다가 의미없이 불리면 안된다는 생각을 갖게되었음... 또한 FIFO로만 구성하려했는데 본질적으로 "왜" 사용해야하는가를 몰랐다 FIFO의 장점은 알고있었다 선입선출이기때문에 순서의 보장이 된다.. 근데 어느상황에 이 방식이 필요한지를 몰랐다.. 그러므로 리소스를 사용할땐 정확한 근거와 스스로 정확하게 이해하고 사용하는게 좋을거같았다

  
</details>
<br>
<details>
    <summary><strong>💡 이준석 회고</strong></summary>
    
프로젝트를 진행하면서 약간의 바보같은 행동들을 하곤 했다.
    
첫 번째, mysql 접속 자체를 못하고 있었다.
>ERROR 1045 (28000): Access denied for user 'project3admin'@'222.119.132.230' (using password: YES)

구글링도 해보고 분명 맞게 한 거 같은데 왜 안 되지? 하고 끙끙대다가 팀원에게 도움을 요청했다.
코드에 -p 부분에 패스워드를 입력하고 있었다 나는,,,
-p라고 돼있으니까 당연히 password인 줄 알았다.
그런데 데이터베이스 이름이란 걸 듣고 바로 접속에 성공했다.
>mysql -h <호스트 네임> -u <유저 네임> -p <데이터베이스>

<br>

---
<br>

두 번째, SNS를 위한 POST 코드를 넣고 나서 로컬에서 curl 요청을 하는데 계속 오류가 발생했다.
>ParameterValueInvalid: The message attribute 'MessageAttributeFactoryId' must contain non-empty message attribute value for message attribute type 'String'.

역시나 구글링으로 이런저런 방법들을 찾아보고 해봤는데 계속 안 됐다.
이 역시나 팀원에게 도움을 요청하니 10초도 안 돼서 해결했다.
>--header 'Content-Type: application/json' --data-raw '{  "MessageAttributeFactoryId": "FF-500293"}'

를 넣어주니 잘 됐다. 'MessageAttributeFactoryId'를 넣으라는 에러 메시지를 읽고,
나 나름대로 넣었을 때는 어떻게 넣어도 잘 안됐었는데 이제 확실히 형식을 알았다.
나 혼자였으면 10시간을 해도 안 됐을거다 분명,,,

<br>

---
<br>

다이어그램을 보고 이 서비스를 왜 썼냐에 대해 생각 할 때, 나는 정말 아무것도 모르는 바보였다.
내가 한 일이라고는 아이콘들이 정리 안 돼있고 흐트러져있는 걸 못 봐서 아이콘들의 정렬에만 집중했을 뿐,,,

분명 머리로는 이해를 하고 이게 이래서 사용하는 거지!라고 정리도 해놓고
막상 말로 하려니 그냥 머리가 백지가 됐다.

- SQS 왜 느슨한 결합이 필요한가?
 : 생산자와 소비자가 직접적으로 이어지면 생산자가 주문을 넣었을 때, 소비자가 처리할 때까지 기다려야 한다. 
그런데 SQS로 중간에 대기열 큐를 넣어주면 생산자는 소비자가 처리하는 것과 상관없이 일단 주문을 넣고 넣었으니 OK하고 다른 일을 할 수 있다는 장점이 있다.
라고 이해를 했다.

- SNS를 왜 썼는가?
 : SNS와 SQS의 아이콘을 보면 알 수 있듯이 SQS는 생산자와 소비자가 1개 밖에 존재하지 않는다.
그러나 SNS는 생산자는 1개여도 소비자는 3개로 갈라지는 것을 알 수 있다.
이처럼 여러 소비자가 존재할 때, SNS를 사용한다.
라고 이해를 했다.

- 람다의 요금 청산?
 : 처음에는 단순히 람다는 사용한 만큼 횟수만큼 요금이 청산 된다고만 알고 있었는데,
코드가 실행을 시작한 시간부터 반환되거나 종료될 때까지 시간으로 계산된다는 것을 알게 되었다.

- 도메인의 분리?
 : 다이어그램에서 도메인 영역을 분리하지 않아서 나는 단순하게 람다가 있는 곳마다 분리해서 판매팀, 재고관리팀, 공장팀, 운영팀, 광고팀으로 구분했다.
그런데 이제 RDS는 어느 영역으로 구분할 것인가라는 생각에 답을 내지 못했다.
판매팀에서도 재고관리팀에서도 다 사용하는데 그럼 두 팀을 합쳐야 하는 것인지에 대해 더 생각해봐야겠다.

이런 전체적인 흐름과 각각의 개념들을 따로 더 공부를 해야겠다고 생각했다.
</details>

<br>

<details>
    <summary><strong>💡 이혜정 회고</strong></summary>

#Trouble Shooting

<img width="946" alt="trouble1 - cloudformation에 스택이 쌓여서 생긴 오류" src="https://user-images.githubusercontent.com/119268657/222943637-804a7a26-b3a0-4105-913a-c0efdf17fc87.png">


	deploy를 진행하다가 만난 에러이다. 코드에는 문제가 없었고, 다른 분이 deploy를 해보면 제대로 배포가 되었다.
	알고보니 deploy를 진행하다가 중간에 취소한 상황 때문에 cloudeformation에 스택이 쌓여서 생긴 오류였다.


#프로젝트를 진행하면서

	서버리스 서비스를 사용하면서 람다,SQS,SNS와 같은 AWS 서비스들의 동작 원리와 용어들에 대해 더 자세하게 이해할 수 있었다.
	이전에는 이해하지 못했던 개념들도 조금 더 파악할 수 있게 되어서 자신감 있게 이러한 서비스들을 사용할 수 있을 거 같다.

	팀 구성을 상품판매팀, 재고관리팀, 재고생산팀, 운영팀, Ad팀으로 나누었을 때
	데이터베이스 사용 여부를 고려하여 상품판매팀과 재고관리팀을 분리해야 할지, 한 팀으로 묶어도 되는지에 대한 고민이 생겼다.
	내 생각으로는 분리하는 것이 적합하다고 판단했지만, 두 팀 모두 데이터베이스를 사용한다는 점에서 함께 묶어도 괜찮을 것 같다는 생각도 들었다.
	결국 정답은 없고 여러 가지 생각을 고려해가며 팀을 구성하는 것이 중요하다는 것을 느꼈다. 이런 고민을 하면서 학습해나가야겠구나...하고 깨닳을 수 있었다.

	명확하게 역할이 정리되지 않은 팀은 과감하게 제외하는 것이 좋다라는 것을 배웠고, 이는 OPS팀에 적용되었다.
	OPS팀은 역할이 명확히 정해지지 않았기 때문에 설명을 하려고 할 때 아무런 말도 떠오르지 않았다.
	또한 다이어그램을 그릴 때는 뭔가 가득 차 보여야 멋있어 보이는 거 같아서.. OPS팀의 역할 부재를 간과했던거 같다.

	추가적으로 표준방식과 FIFO를 사용해야 하는 상황에 대해서 생각해보았는데, FIFO방식은 일부 상황에서는 비효율적일 수 있다는 것을..
	선입선출! 순서보장! 단순히 장점에만 집중해서 공부했었다.
	FIFO는 처리량이 제한되어있고, 처리량이 많을때는 적절하지 않다..라는 것을 떠올리지 못했다.

	이러한 경험으로 앞으로는 단순히 장점에만 집중하지 않고 폭넓게 바라봐야겠다는 생각이 들었다.


	많은 것을 배웠지만 아직도 서버리스 아키텍처에 대한 더 깊은 이해가 필요하다는 것을 느꼈고,특히 마이크로서비스 아키텍쳐를 구성하고 관리하는 것에 대해 더 많은 학습이 필요다고 생각들었다.

	이번 프로젝트를 통해 쌓은 경혐과 지식은 앞으로 서버리스 아키텍쳐를 구축하고 관리하는 데 큰 도움이 될 것 같다.
