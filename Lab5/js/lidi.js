var lidi = {
  create : (opt) => {
    let inst = opt;
    if (!inst.status) { inst.status = 0; }

    // WRAPPER
    inst.hWrap.classList.add("lidiWrap");
    if (inst.count) { inst.hWrap.classList.add("count"); }

    // LIKE BUTTON
    inst.hUp = document.createElement("div");
    inst.hUp.className = "lidiUp";
    if (inst.status==1) { inst.hUp.classList.add("set"); }
    inst.hWrap.appendChild(inst.hUp);

    // DISLIKE BUTTON
    inst.hDown = document.createElement("div");
    inst.hDown.className = "lidiDown";
    if (inst.status==-1) { inst.hDown.classList.add("set"); }
    inst.hWrap.appendChild(inst.hDown);

    inst.hUp.addEventListener("click", () => { lidi.updown(inst, true); });
    inst.hDown.addEventListener("click", () => { lidi.updown(inst, false); });

    return inst;
  },

  updown : (inst, up) => {
    if (up) { inst.status = inst.status == 1 ? 0 : 1; }
    else { inst.status = inst.status == -1 ? 0 : -1; }

    if (inst.status==1) {
      inst.hUp.classList.add("set");
      inst.hDown.classList.remove("set");
    } else if (inst.status==-1) {
      inst.hUp.classList.remove("set");
      inst.hDown.classList.add("set");
    } else {
      inst.hUp.classList.remove("set");
      inst.hDown.classList.remove("set");
    }
  },
};
