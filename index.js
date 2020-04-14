$(function () {
  // 2020年4月13日19:10:33开始写代码...

  // 轮播切换时间设置为2秒，默认是5秒
  $('.carousel').carousel({
    interval: 2000,
  });

  // 点击切换传染病
  $('.virusType').click(function () {
    $('.chooseDisease').toggle('600');
  });
  $('.chooseDisease').click(function () {
    hideAll();
    $('.chooseDisease').hide('600');
  });
  // 点击help
  $('.help').click(function () {
    $('#helpModal').show('600');
  });
  $('.closeHelp').click(function () {
    $('#helpModal').hide();
  });
  /*
    工作区切换
  */
  function hideAll() {
    $('.Literature').hide();
    $('.PublicationBias').hide();
    $('.MetaAnalysis').hide();
    $('.SubgroupMeta').hide();
    $('.MetaRegression').hide();
    $('.BayesiaMeta').hide();
    $('.IndividualIncubation').hide();
    $('.QPeriod').hide();
    $('.CostOfACTIVE').hide();
  }
  $('#Literature').click(function () {
    hideAll();
    $('.Literature').show();
  });
  $('#PublicationBias').click(function () {
    hideAll();
    $('.PublicationBias').show();
  });
  $('#MetaAnalysis').click(function () {
    hideAll();
    $('.MetaAnalysis').show();
  });
  $('#SubgroupMeta').click(function () {
    hideAll();
    $('.SubgroupMeta').show();
  });
  $('#MetaRegression').click(function () {
    hideAll();
    $('.MetaRegression').show();
  });
  $('#BayesiaMeta').click(function () {
    hideAll();
    $('.BayesiaMeta').show();
  });
  $('#IndividualIncubation').click(function () {
    hideAll();
    $('.IndividualIncubation').show();
  });
  $('#QPeriod').click(function () {
    hideAll();
    $('.QPeriod').show();
  });
  $('#CostOfACTIVE').click(function () {
    hideAll();
    $('.CostOfACTIVE').show();
  });
});
