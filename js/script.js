document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.card > *');
  
    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`;
    });
  });
  

document.addEventListener('DOMContentLoaded', function () {
const iconContainer = document.querySelector('.falling-icons-container');

// 圣诞图标类别数组
const christmasIcons = ['fa-snowman', 'fa-gift', 'fa-tree', 'fa-bell', 'fa-candy-cane', 'fa-santa-hat', 'fa-holly-berry', 'fa-sleigh', 'fa-star', 'fa-mistletoe', 'fa-gingerbread-man'];


// 设置间隔时间（毫秒）
const interval = 888; // 0.521秒

// 创建图标的函数
function createIcon() {
    const icon = document.createElement('i');
    const randomIcon = christmasIcons[Math.floor(Math.random() * christmasIcons.length)];
    icon.classList.add('fas', randomIcon, 'falling-icon');
    icon.style.left = `${Math.random() * 100}vw`;
    icon.style.animationDuration = `${Math.random() * 3.8 + 6}s`;
    iconContainer.appendChild(icon);

    // 监听动画结束事件，结束时移除图标元素
    icon.addEventListener('animationiteration', function () {
    icon.remove();
    });
}

    // 设置间隔时间，每隔一段时间创建一个新的图标
    setInterval(createIcon, interval);

    // 初始创建一个图标
    createIcon();

});
  
  
  
  