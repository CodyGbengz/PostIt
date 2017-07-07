$(document).ready(() => {
  $('.answer').change(function(){
    console.log('clickd');})
        $('#myform input').on('change', function(){
        console.log($('input[name=answer]:checked','#myform').val());
      });
    });


const getGroups = () => {
  const groupsUrl = '';
  const groups = [];
  $.getJSON(groupsUrl, (response) => {


  });
};
