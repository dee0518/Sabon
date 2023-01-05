(function (root, factory) {
    root.tkSlide = factory();
}(window, function () {
    
    var easing = "";
    
    // Return true if parent has child
    function isChildOf(parent, child) {
        while (child !== null) {
            if (parent === child) return true;
            
            child = child.parentElement;
        }
        
        return false;
    }
    
    // Get index number of element
    function getIndexOf(elmt) {
        var pos = 0;

        while (elmt !== null) {
            elmt = elmt.previousElementSibling;

            if (elmt !== null) {
                pos++;
            }
        }

        return pos;
    }
    
    // Parse array by float or int
    function parseArray(arr, type) {
        for (var i = 0; i < arr.length; i++) {
            if (type === "int") {
                arr[i] = parseInt(arr[i]);
            } else if (type === "float") {
                arr[i] = parseFloat(arr[i]);
            }
        }
        
        return arr;
    }
    
    // Change non-array value to array
    function nonArrayToArray(nonArr) {
        var arr = [];
        
        if (nonArr) {
            for (var i = 0; i < nonArr.length; i++) {
                arr.push(nonArr[i]);
            }
        }
        
        return arr;
    }
    
    // Change class list to array
    function classListToArray(classList) {
        classList = nonArrayToArray(classList);

        if (typeof classList === "string") {
            classList = [classList];
        }

        return classList;
    }
    
    // Set class name to single element
    function setClassName(elmt, className) {
        var classList = classListToArray(elmt.classList);

        if (classList.indexOf(className) === -1) {
            classList.push(className);
        }

        classList = classList.join(" ");
        elmt.className = classList;

        return;
    }
    
    // Remove class name from single element
    function removeClassName(elmt, className) {
        var classList = classListToArray(elmt.classList);

        if (classList.indexOf(className) !== -1) {
            classList.splice(classList.indexOf(className), 1);
        }

        classList = classList.join(" ");
        elmt.className = classList;

        return;
    }
    
    // Get boolean value if element has class name
    function hasClassName(elmt, className) {
        if (!elmt) return false;
        
        var classList = classListToArray(elmt.classList);
        
        if (classList.indexOf(className) !== -1) {
            return true;
        } else {
            return false;
        }
    }
    
    // Get css value as parsed
    // It can handle multiple elements
    function getCssValue(elmts, prop) {
        var temp = null;
        var value = [];
        
        if (elmts.length === undefined) {
            elmts = [elmts];
        }
        
        for (var i = 0; i < elmts.length; i++) {
            temp = getComputedStyle(elmts[i]);
            temp = temp.getPropertyValue(prop);
            value.push(temp);
        }
        
        value = parseArray(value, "float");
        
        if (value.length === 1) {
            value = (value[0]) ? value[0] : value;
        }
        
        return value;
    }
    
    // Set css value
    // This can handle multiple elements
    function setCssValue(elmts, prop, value) {
        if (elmts.length === undefined) {
            elmts = [elmts];
        }
        
        for (var i = 0; i < elmts.length; i++) {
            elmts[i].style[prop] = value;
        }
        
        return;
    }
    
    // Get elements array list
    // This will return elements by array
    function getElements(things, parent) {
        if (typeof things === "string") {
            things = (parent) ? parent.querySelectorAll(things) : document.querySelectorAll(things);
        }
        
        if (!things) return false;
        
        if (things.length > 1) {
            things = nonArrayToArray(things);
        } else {
            things = (things[0]) ? things[0] : things;
        }
        
        return things;
    }
    
    // Get boolean value
    function getBooleanValue(bool) {
        if (bool === undefined || typeof bool !== "boolean") {
            bool = true;
        }
        
        return bool;
    }
    
    // Get timing function name
    function getTimingFunction(timing) {
        var validTiming = ["linear", "easeIn", "easeOut"];
        
        if (timing === undefined || typeof timing !== "string" || validTiming.indexOf(timing) === -1) {
            timing = "linear";
        }
        
        return timing;
    }
    
    // Get time duration
    function getTimeDuration(time, def) {
        if (time === undefined || typeof time !== "number" || isNaN(time)) {
            time = def;
        }
        
        return time;
    }
    
    // Get direction
    function getDirection(dir) {
        var validDirection = ["horizontal", "vertical", "fadeInOut"];
        
        if (dir === undefined || typeof dir !== "string" || validDirection.indexOf(dir) === -1) {
            dir = "horizontal";
        }
        
        return dir;
    }
    
    // Get children elements
    function getChildrenElements(parent) {
        var children = getElements(parent.children);
        
        if (children.length === undefined) {
            children = [children];
        }
        
        return children;
    }
    
    // Get property name by direction | 'left', 'top', 'opacity'
    function getPropertyNameByDirection(dir) {
        var temp = "";
        
        switch (dir) {
            case "horizontal":
                temp = "left";
                break;
            case "vertical":
                temp = "top";
                break;
            case "fadeInOut":
                temp = "opacity";
                break;
        }
        
        return temp;
    }

    // Get change value of children
    function getChangeValueOfChildren(prop) {
        var value = "";

        switch (prop) {
            case "left":
                value = "width";
                break;
            case "top":
                value = "height";
                break;
            case "opacity":
                value = "opacity";
                break;
        }
        
        return value;
    }
    
    // Set initial position of slide elements by loop
    function setInitialPosition(parentSet, childrenSet, loop) {
        var parent = parentSet.elements;
        var children = childrenSet.elements;
        var lastIdx = children.length - 1;
        var childProp = childrenSet.property;
        var changeValue = childrenSet.changeValue;
        
        function setChildrenInitial(bool) {
            var idx = 0;
            var unit = (changeValue === "opacity") ? "" : "px";
            
            setCssValue(children, "width", parentSet.width + "px");
            setCssValue(children, "height", parentSet.height + "px");
            setCssValue(children, "position", "absolute");
            
            for (var i = 0; i < children.length; i++) {
                if (bool) {
                    idx = i - 1;
                } else {
                    idx = i;
                }
                
                setCssValue(children[i], childProp, (parentSet[changeValue] * idx) + unit);
            }
        }
        
        function cloneElement(elmt, idx) {
            var temp = elmt[idx];
            
            temp = temp.outerHTML;
            
            return temp;
        }
        
        if (loop && childProp !== "opacity") {
            var firstTemp = cloneElement(children, 0);
            var lastTemp = cloneElement(children, lastIdx);
            var innerTemp = parent.innerHTML;
            
            innerTemp = lastTemp + innerTemp + firstTemp;
            parent.innerHTML = innerTemp;
            children = getChildrenElements(parent);
            lastIdx = children.length - 1;
            
            setClassName(children[1], "tk-slide-on");
            setClassName(children[0], "tk-slide-first");
            setClassName(children[lastIdx], "tk-slide-last");
            setChildrenInitial(true);
        } else {
            setClassName(children[0], "tk-slide-on");
            setChildrenInitial(false);
            setCssValue(children[0], "opacity", 1);
        }
        
        return;
    }
    
    function getEasedProgress(t) {
        if (easing === "linear") {
            return t;
        } else if (easing === "easeIn") {
            return t * t * t * t;
        } else if (easing === "easeOut") {
            t = 1 - t;
            return 1 - (t * t * t * t);
        }
    }
    
    var frame = [];
    
    // Start animation frame by animate function
    function animate(children, init, distance, prop, i, t, cb) {
        var start = Date.now();
        var run = 0;
        var time = 0;
        var progress = 0;
        var unit = (prop === "opacity") ? "" : "px";
        
        frame[i] = (frame[i] === undefined) ? setInterval(function () {
            run = Date.now();
            time = (run - start) / t;
            
            if (time > 1) {
                time = 1;
            } else if (time < 0) {
                time = 0;
            }
            
            progress = getEasedProgress(time);
            children.style[prop] = (init + (distance * progress)) + unit;
            
            if (time === 1) {
                clearInterval(frame[i]);
                frame[i] = undefined;
                
                if (cb !== undefined && isAnimationEnd(frame)) {
                    cb();
                }
            }
        }, 1) : frame[i];
        
        return;
    }
    
    function isAnimationEnd(frame) {
        var counter = 0;
        
        for (var i = 0; i < frame.length; i++) {
            if (frame[i] === undefined) {
                counter++;
            }
        }
        
        if (counter === frame.length) {
            return true;
        } else {
            return false;
        }
    }
    
    function clearAnimation() {
        for (var i = 0; i < frame.length; i++) {
            clearInterval(frame[i]);
            frame[i] === undefined;
        }
        
        return;
    }
    
    // animate elements by index position
    // parentSet.elements = container
    // parentSet.width = container width
    // parentSet.height = container height
    // parentSet.opacity = container opacity
    // childSet.elements = children
    // childSet.direction = direction
    // childSet.property = property name | 'left', 'top', 'opacity'
    // childSet.changeValue = property name | 'width', 'height', 'opacity' | approach to parentSet[childSet.changeValue]
    // idx = index number of .tk-slide-on
    // t = animateTime
    // cb = callback function
    function animateByIndexPosition(parentSet, childSet, idx, t, cb) {
        var children = childSet.elements;
        var propName = childSet.property;
        var changeProp = childSet.changeValue;
        var value = parentSet[changeProp];
        var init = getCssValue(children, propName);
        var newIdx = 0;
        var distance = 0;
        
        for (var i = 0; i < children.length; i++) {
            newIdx = i - idx;
            
            if (childSet.property === "opacity") {
                if (newIdx === 0) {
                    distance = 1;
                } else {
                    distance = (init[i] === 1) ? -1 : 0;
                }
            } else {
                distance = (value * newIdx) - init[i];
            }
            
            animate(children[i], init[i], distance, propName, i, t, cb);
        }
    }
    
    var timer = null;
    var startTime = null;
    
    // clear timer and start time
    function clearTimer() {
        clearInterval(timer);
        timer = null;
        startTime = null;
    }
    
    // check time and slide auto
    function autoSlide(parentSet, childSet, page, slideTime, animateTime, loop, cb) {
        if (startTime !== null) {
            var run = 0;
            var time = 0;
            
            timer = setInterval(function () {
                run = Date.now();
                time = (run - startTime) / slideTime;
                
                if (time > 1) {
                    time = 1;
                } else if (time < 0) {
                    time = 0;
                }
                
                if (time === 1) {
                    var focus = getElements(".tk-slide-on", parentSet.elements);
                    var nextElement = focus.nextElementSibling;
                    var thisIdx = getIndexOf(focus);
                    var nextIdx = 0;
                    var pageIdx = 0;
                    var animateIdx = 0;
                    var length = childSet.elements.length - 1;
                    
                    if (nextElement !== null && !hasClassName(nextElement, "tk-slide-last")) {
                        nextIdx = getIndexOf(nextElement);
                        animateIdx = nextIdx;
                    } else if (hasClassName(nextElement, "tk-slide-last")) {
                        nextIdx = 1;
                        animateIdx = length;
                    }
                    
                    if (loop && childSet.property !== "opacity") {
                        pageIdx = nextIdx - 1;
                    } else {
                        pageIdx = nextIdx;
                    }
                    
                    removeClassName(childSet.elements[thisIdx], "tk-slide-on");
                    setClassName(childSet.elements[nextIdx], "tk-slide-on");
                    
                    for (var i = 0; i < page.length; i++) {
                        removeClassName(page[i], "tk-slide-page-on");
                    }
                    
                    setClassName(page[pageIdx], "tk-slide-page-on");
                    
                    clearInterval(timer);
                    timer = null;
                    
                    animateByIndexPosition(parentSet, childSet, animateIdx, animateTime, function () {
                        if (startTime !== null) {
                            startTime = Date.now();

                            if (loop && childSet.property !== "opacity") {
                                if (animateIdx === length) {
                                    cb(true);
                                }
                            } else {
                                if (nextIdx === length) {
                                    cb(true);
                                }
                            }

                            autoSlide(parentSet, childSet, page, slideTime, animateTime, loop, cb);
                        }
                    });
                }
            }, 1);
        }
    }
    
    // prms.container = slider container
    // prms.direction = slide direction | default is 'horizontal' | 'horizontal', 'vertical', 'fadeInOut'
    // prms.controller = It has 'prev', 'next', 'pagenation' properties
    // prms.controller.prev = preview button
    // prms.controller.next = next button
    // prms.controller.pagenation = page navigation
    // prms.controller.play = play button | It doesn't work if autoplay is false
    // prms.controller.stop = stop button | It doesn't work if autoplay is false
    // prms.autoplay = set autoplay | default is true
    // prms.loop = set loop | default is true
    // prms.animateTime = set animation playing time | default is 500
    // prms.slideTime = set autoplay time | default is 1500 | It doesn't work if autoplay is false
    // prms.timingFunction = set timing function | default is 'linear' | 'linear', 'easeIn', 'easeOut' is available
    function tkSlide(prms) {
        if (!prms) return;
        
        var container = getElements(prms.container);
        
        if (!container) {
            throw new Error("container is null");
        }
        
        var direction = getDirection(prms.direction);
        var children = getChildrenElements(container);
        var autoplay = getBooleanValue(prms.autoplay);
        var loop = getBooleanValue(prms.loop);
        var animateTime = getTimeDuration(prms.animateTime, 500);
        var slideTime = getTimeDuration(prms.slideTime, 1500);
        var timingFunction = getTimingFunction(prms.timingFunction);
        var containerSet = {
            elements: container,
            width: getCssValue(container, "width"),
            height: getCssValue(container, "height"),
            opacity: 0
        };
        var childrenSet = {
            elements: children,
            direction: direction,
            property: getPropertyNameByDirection(direction)
        };
        
        easing = timingFunction;
        
        // callback function
        // Set elements position when animation ends
        function callbackFunction(bool) {
            var idx = 0;
            var end = 0;
            var children = childrenSet.elements;
            var length = children.length;
            
            if (bool) {
                end = 1;
            } else {
                end = length - 2;
            }

            for (var i = 0; i < length; i++) {
                idx = i - end;
                setCssValue(children[i], childrenSet.property, (containerSet[childrenSet.changeValue] * idx) + "px");
            }
        }
        
        childrenSet.changeValue = getChangeValueOfChildren(childrenSet.property);
        setInitialPosition(containerSet, childrenSet, loop);
        setCssValue(container, "overflow", "hidden");
        childrenSet.elements = getChildrenElements(containerSet.elements);
        
        if (prms.controller) {
            // if controller is set, add controller event
            var controller = prms.controller;
            var prev = getElements(controller.prev);
            var next = getElements(controller.next);
            var pagenation = getElements(controller.pagenation);
            var pageChildren = getChildrenElements(pagenation);
            var play = getElements(controller.play);
            var stop = getElements(controller.stop);
            
            // pagenation class setting
            // idx = index number of tk-slide-on
            // def = if loop is true, def must be set to true
            function setPagenationClassByIndex(idx, def) {
                if (!pageChildren) return null;
                
                if (def === undefined) {
                    if (loop) {
                        idx = (childrenSet.property === "opacity") ? idx : idx - 1;
                    }
                }
                
                for (var i = 0; i < pageChildren.length; i++) {
                    removeClassName(pageChildren[i], "tk-slide-page-on");
                }
                
                setClassName(pageChildren[idx], "tk-slide-page-on");
            }
            
            // Next or prev button click event
            function slideByNextPrevButton(e) {
                clearTimer();
                
                if (!isAnimationEnd(frame)) return;
                
                var focus = getElements(".tk-slide-on", containerSet.elements);
                var bool = null;
                
                if (isChildOf(next, e.target)) {
                    bool = true;
                } else if (isChildOf(prev, e.target)) {
                    bool = false;
                }
                
                if (bool === null) return;
                
                var positionProperty = (bool) ? "nextElementSibling" : "previousElementSibling";
                var nextElement = focus[positionProperty];
                var animateIdx = 0;
                var children = childrenSet.elements;
                var lastIdx = children.length - 1;
                
                // Set class name to children element by position
                // first | direction is horizontal or vertical, when slide from first to last
                // last | direction is horizontal or vertical, when slide from last to first
                // firstOpacity | direction is fadeInOut, when slide from first to last
                // lastOpacity | direction is fadeInOut, when slide from last to first
                // next | when slide to next or prev element
                function setClassNameByIndex(pos) {
                    var element = null;
                    
                    removeClassName(focus, "tk-slide-on");

                    if (pos === "first") {
                        element = children[lastIdx - 1];
                    } else if (pos === "last") {
                        element = children[1];
                    } else if (pos === "next") {
                        element = nextElement;
                    } else if (pos === "lastOpacity") {
                        element = children[0];
                    } else if (pos === "firstOpacity") {
                        element = children[lastIdx];
                    }
                    
                    setClassName(element, "tk-slide-on");

                    return;
                }
                
                if (!loop) {
                    if (nextElement !== null) {
                        setClassNameByIndex("next");
                        animateIdx = getIndexOf(nextElement);
                        setPagenationClassByIndex(animateIdx, true);
                        animateByIndexPosition(containerSet, childrenSet, animateIdx, animateTime);
                    }
                } else {
                    // if loop is true
                    var checker = null;
                    var callback = undefined;
                    
                    if (hasClassName(nextElement, "tk-slide-first")) {
                        // slide direction is horizontal or vertical
                        // when slide from first to last
                        animateIdx = 0;
                        setClassNameByIndex("first");
                        checker = "first";
                        setPagenationClassByIndex(lastIdx - 1);
                    } else if (hasClassName(nextElement, "tk-slide-last")) {
                        // slide direction is horizontal or vertical
                        // when slide from last to first
                        animateIdx = lastIdx;
                        setClassNameByIndex("last");
                        checker = "last";
                        setPagenationClassByIndex(1);
                    } else if (getIndexOf(focus) === 0 && !bool) {
                        // slide direction is fadeInOut
                        // when slide from first to last
                        animateIdx = lastIdx;
                        setClassNameByIndex("firstOpacity");
                        setPagenationClassByIndex(animateIdx);
                    } else if (getIndexOf(focus) === lastIdx && bool) {
                        // slide direction is fadeInOut
                        // when slide from last to first
                        animateIdx = 0;
                        setClassNameByIndex("lastOpacity");
                        setPagenationClassByIndex(animateIdx);
                    } else {
                        // when slide to next or prev element
                        animateIdx = getIndexOf(nextElement);
                        setClassNameByIndex("next");
                        setPagenationClassByIndex(animateIdx);
                    }
                    
                    
                    if (checker === "first") {
                        callback = function () {
                            callbackFunction(false);
                        };
                    } else if (checker === "last") {
                        callback = function () {
                            callbackFunction(true);
                        };
                    }
                    
                    animateByIndexPosition(containerSet, childrenSet, animateIdx, animateTime, callback);
                }
                
                return;
            }
            
            // Pagenation click event
            function slideByPagenationButton(e) {
                if (!isAnimationEnd(frame)) return;
                
                clearTimer();
                
                var idx = 0;
                var counter = 0;
                
                for (var i = 0; i < pageChildren.length; i++) {
                    if (isChildOf(pageChildren[i], e.target)) {
                        idx = i;
                    } else {
                        counter++;
                    }
                }
                
                if (counter === pageChildren.length) return;
                
                for (var i = 0; i < childrenSet.elements.length; i++) {
                    removeClassName(childrenSet.elements[i], "tk-slide-on");
                }
                
                setPagenationClassByIndex(idx, true);
                
                if (loop) {
                    idx = (childrenSet.property === "opacity") ? idx : idx + 1;
                }
                
                setClassName(childrenSet.elements[idx], "tk-slide-on");
                animateByIndexPosition(containerSet, childrenSet, idx, animateTime);
            }
            
            // play autoplay
            function playAutoplay(e) {
                if (!isAnimationEnd(frame)) return;
                
                if (isChildOf(play, e.target) && startTime === null) {
                    startTime = Date.now();
                    autoSlide(containerSet, childrenSet, pageChildren, slideTime, animateTime, loop, callbackFunction);
                }
                
                return;
            }
            
            if (next) {
                next.addEventListener("click", slideByNextPrevButton);
            }
            
            if (prev) {
                prev.addEventListener("click", slideByNextPrevButton);
            }
            
            if (pagenation && pageChildren) {
                setClassName(pageChildren[0], "tk-slide-page-on");
                pagenation.addEventListener("click", slideByPagenationButton);
            }
            
            if (play) {
                if (autoplay && loop) {
                    play.addEventListener("click", playAutoplay)
                }
            }
            
            if (stop) {
                if (autoplay && loop) {
                    stop.addEventListener("click", clearTimer);
                }
            }
        }
        
        if (autoplay && loop) {
            startTime = Date.now();
            autoSlide(containerSet, childrenSet, pageChildren, slideTime, animateTime, loop, callbackFunction);
        }
    }
    
    return tkSlide;
}));