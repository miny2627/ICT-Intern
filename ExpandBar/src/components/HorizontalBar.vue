<template>
<div>
    <div class="fixed-top topBar">
		<div class="container">
			<div class="row">
				
				<div class="col area-left">
					<div class="navbar-brand">
						<a href="#"><img src="img/logo.svg"></a>
					</div>
				</div><!-- //area-left -->	
	
				<div class="col area-contents">
					
					<button type="button" id="doc-title-btn" class="btn btn-30 btn-button2 btn-icon-width30 mb-2"><i class="icon-pen"></i></button>
					<button type="button" id="doc-titleSave-btn" class="btn btn-30 btn-button2 btn-icon-width30 mb-2 d-none"><i class="icon-save"></i></button>
					<input type="text" id="doc-title-input" class="form-control form-control-36 form-control-title" value="분석카탈로그 (201905231740201516)" readonly>
					
					<ul class="nav topBarButton">
						<li><button type="button" class="btn btn-36 btn-button1 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="새 워크플로우"><i class="icon-new-doc"></i></button></li>
				        <li><button type="button" class="btn btn-36 btn-button1 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="저장"><i class="icon-save"></i></button></li>
				        <li><button type="button" class="btn btn-36 btn-button1 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="삭제"><i class="icon-delete_trash"></i></button></li>
				        <li><button type="button" class="btn btn-36 btn-button1 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="초기화"><i class="icon-refresh"></i></button></li>
				        <li><button type="button" class="btn btn-36 btn-button1 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="결과 리포트"><i class="icon-report"></i></button></li>
					</ul>
					
				</div><!-- //area-contents -->	
	
				<div class="col area-right">

					<ul class="nav logArea">
						<li><img src="img/userPic.png"></li>
						<li class="logInfo">
							<p>홍길동 님</p>
							<span>2019.05.15 접속중</span>
						</li>
					</ul>
					<ul class="nav logButton">
						<li><button type="button" class="btn btn-36 btn-button1 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="도움말"><i class="icon-question"></i></button></li>
						<li><button type="button" class="btn btn-36 btn-button4 btn-icon-width36" data-toggle="tooltip" data-placement="bottom" title="로그아웃"><i class="icon-logout"></i></button></li>
					</ul>

				</div><!-- //area-right -->	

			</div><!-- //row -->	
		</div><!-- container -->
	</div><!-- topBar -->
    
<!-- ------------------------------------------------------------- contents ------------------------------------------------------------- -->
	<section id="contents">

		<!-- ********** 상단 탭 메뉴 ********** -->
		<div class="container">
			<div class="row">

				<div class="col-12 p-0 bg-white">
					
					<ul id="manu-tab" class="nav nav-tabs nav-justified" role="tablist">
						<li class="nav-item">
							<!-- * class= active 적용하면 활성화 표시 )-->
					    	<a class="nav-link active" id="manu-tab1" data-toggle="pill" href="#manu-tabContent1" role="tab" aria-controls="manu-tabContent1" aria-selected="true">
					    		<button type="button" class="close"><i class="icon-close-circle"></i></button>요인분석
					    	</a>
						</li>
					</ul><!-- //.nav -->	

				</div><!-- //.col -->	
			</div><!-- //.row -->	
		</div><!-- //.container -->	
		<!-- ********** //상단 탭 메뉴 ********** -->
		
		<!-- ********** 내용 ********** -->
		<div class="tab-content" id="manu-tabContent">
			<div class="tab-pane fade show active" id="manu-tabContent1" role="tabpanel" aria-labelledby="manu-tab1" >
				
				<div class="container">
					<div class="row">
		
						<!-- ********** 왼쪽 내용 (sideMenu) ********** -->
						<div class="col area-left p-0 border-right-3 position-relative" style="max-width: 330px;">
							
							<!-- 사이즈 조절 버튼 -->
							<button class="size-control sideMainControl rotate-90"><i class="icon-expand-horizontal"></i></button>
								
					    	<h3 class="font-color-373737 boder-bottom-A9B2B7 p-3"><i class="icon-file-solid mr-1"></i>요인분석</h3>
					
							<div class="pt-3 pb-2 px-4">
							
								<div class="form-group">
								    <label class="font-color-373737 font-weight-500">그룹 개수</label>
								    <input type="text" class="form-control form-control-36" id="exampleInputEmail1" value="2" placeholder=" ">
								</div>

								<div class="form-group">
								    <label class="font-color-373737 font-weight-500">거리측정기준</label>
									<select class="form-control form-control-36" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
								    </select>
								</div>

								<div class="form-group mb-4">
								    <label class="font-color-373737 font-weight-500">라벨 선택</label>
									<select class="form-control form-control-36" id="exampleFormControlSelect2">
										<option>1</option>
										<option>2</option>
										<option>3</option>
								    </select>
								</div>

								<div class="card bg-F5F5F5 border-0 p-2">
									<div class="card-body p-1">

										<div class="form-row">
											<label class="col-3 col-form-label font-color-373737 font-weight-500 text-center">모델이름</label>
											<div class="col">
												<input type="text" class="form-control form-control-36" id="customSwitch1" placeholder="이름을 입력하세요">
											</div>
										</div>

									</div><!-- //card-body -->
								</div><!-- //card -->
								
								<div class="text-center pt-5 mt-5">
									<button type="button" class="btn btn-36 btn-button4"><i class="icon-check mr-2"></i>적용하기</button>
								</div>
								
							</div><!-- //p-3 -->

						</div><!-- //col area-left -->
		
						<!-- ********** 중앙 내용 ********** -->
						<div class="col area-contents">

							<div class="pt-4 px-2" >

								<div class="row no-gutters">
									<div class="col-6 position-relative">
										
										<!-- 사이즈 조절 버튼 -->
										<button class="size-control rotate-90" style="position: absolute; top: 48%; left: calc(100% - 25px);"><i class="icon-expand-horizontal"></i></button>
										
										<div class="card rounded-8 rounded-right-0 border-A9B2B7 shadow-01 height-100vh">
											<div class="card-body">

												<h3 class="font-color-373737 boder-bottom-A9B2B7 pb-3 mb-3"><i class="icon-graph mr-1"></i>그래프 (rChartimg)</h3>

												<div>
													
													그래프 영역
													
												</div>

											</div><!-- //card-body -->
										</div><!-- //card -->
		
									</div><!-- //col -->
									<div class="col-6 position-relative height-100vh">
										
										<!-- 사이즈 조절 버튼 -->
										<button class="size-control" style="position: absolute; top: calc(45% - 4px); left: 48%;"><i class="icon-expand-horizontal"></i></button>
											
										<div class="card rounded-8 rounded-left-0 rounded-bottom-right-0 border-A9B2B7 shadow-01" style="min-width: 500px; height: 45%">
											<div class="card-body">

												<h3 class="font-color-373737 boder-bottom-A9B2B7 pb-3 mb-3"><i class="icon-list mr-1"></i>결과메시지</h3>
												
												<div class="card bg-F5F5F5 border-0 p-2 overflow-auto" style="height: 64%;">
													<div class="card-body p-1">
														
<pre class="text-14">
Call:
princomp(x = df_numeric, cor = FALSE)
Standard deviations:
    Comp.1     Comp.2      Comp.3     Comp.4     Comp.5
43.3379478  0.9837850  0.4717649  0.2613026  0.1508066
 5 variables and 150 observations.Call:
princomp(x = df_numeric, cor = FALSE)
Standard deviations:
    Comp.1     Comp.2      Comp.3     Comp.4     Comp.5
43.3379478  0.9837850  0.4717649  0.2613026  0.1508066
 5 variables and 150 observations.Call:
princomp(x = df_numeric, cor = FALSE)
Standard deviations:
    Comp.1     Comp.2      Comp.3     Comp.4     Comp.5
43.3379478  0.9837850  0.4717649  0.2613026  0.1508066
 5 variables and 150 observations.Call:
princomp(x = df_numeric, cor = FALSE)
Standard deviations:
    Comp.1     Comp.2      Comp.3     Comp.4     Comp.5
43.3379478  0.9837850  0.4717649  0.2613026  0.1508066
 5 variables and 150 observations.
</pre>

													</div><!-- //card-body -->
												</div><!-- //card -->
												
											</div><!-- //card-body -->
										</div><!-- //card -->
		
										<div class="card rounded-8 rounded-left-0 rounded-top-right-0 border-A9B2B7 shadow-01" style="min-width: 500px; height: 55%"><!-- 20190910 삭제 overflow-auto -->
											<div class="card-body">

												<div class="card bg-F5F5F5 border-0 p-2" style="height: 100%;">
													<div class="card-body p-1">
														
<pre class="text-14 overflow-hidden">
> names(med.factor)
[1] "values"   "rotation"  "n.obs"      "communality"    "loadings"    "fit"
[7] "fit.off"  "fn"        "Call"       "uniquenesses"   "complexity"  "chi"
[13] "EPVAL"    "R2"        "objective"  "residual"       "rms"         "factors"
[19] "dof"      "null.dof"  "null.model" "criteria"       "STATISTIC"   "PVAL"
[25] "weights"  "r.scores"  "Structure"  "scores"
> med.factor$values
[1] 3.3791814 1.4827707 1.2543456 0.9864734 0.7687366 0.6453623 0.6287654 0.5287654
 [10] 0.3567454 0.2654323
> plot(med.factor$values, type="b")

</pre>

													</div><!-- //card-body -->
												</div><!-- //card -->
									
											</div><!-- //card-body -->
										</div><!-- //card -->
										
									</div><!-- //col -->
								</div><!-- //row -->

							</div><!-- //p-4 -->

							<div class="copyright mr-2"><span>© 2019 CSLEE. 모든 권리 보유</span>버전 : 0.5.1.19058</div>

						</div><!-- //col area-contents -->	
						<!-- ********** //중앙 내용 ********** -->
						
					</div><!-- //row -->
				</div><!-- //container -->
		
			</div><!-- //tab-pane -->
		</div><!-- //tab-content -->

	</section>
</div>
</template>