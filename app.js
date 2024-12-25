const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

// Kích thước của 1 block
const blockWidt = 100;
const blockHeigt = 20;
// Kích thước game window
const boardWidth = 560;
const boardHeight = 300;

// Define vị trí lúc bắt đầu game và set vị trí hiện tại
/// Vị trí của khối gạch có thể di chuyển để đỡ trái bóng
const startPos = [230, 10];
let currentPos = startPos;

// Vị trí của quả bóng, tương ứng với vị trí của khối gạch đỡ bóng
const ballStartPos = [270, 40];
let currentBallPos = ballStartPos;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
    }
}

// Tạo tấm gỗ
const user = document.createElement("div");
user.classList.add("user");
// Thêm tấm gỗ vào grid
grid.appendChild(user);

drawUser();

// Add the ball
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();


function drawUser() {
    // Set vị trí ban đầu
    user.style.left = currentPos[0] + "px";
    user.style.bottom = currentPos[1] + "px";
}

function drawBall() {
    // Set vị trí ban đầu
    ball.style.left = currentBallPos[0] + "px";
    ball.style.bottom = currentBallPos[1] + "px";
}
