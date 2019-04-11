let socket = io();
socket.on('connected',()=>{
    console.log('Connected')
});

$(function () {
    let  msglist = $("#msglist");
    let  sendbtn = $("#sendmsg");
    let  msgbox = $("#msgbox");

    sendbtn.click(function() {
        socket.emit('send_msg',{message: msgbox.val()})
    })

    socket.on('recv_msg',(data)=>{
        msglist.append($('<li>' + data.message + '</li>'))
    })
});
