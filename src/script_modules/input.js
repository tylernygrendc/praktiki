import * as error from "./error.js";
import * as date from "./date.js";
import * as element from "./element.js";

function styleCheckList(fieldset) {
  try {
    if (typeof fieldset.name === "string") {
      let options = fieldset.innerText.split(",");
      options.forEach((option) => {
        let unique = element.uniqueString();
        let div = element.createNew("div", {
          classArray: ["checkListOption"],
        });
        let check = element.createNew("input", {
          id: unique,
          attrObject: {
            type: "checkbox",
            name: option,
          },
        });
        let label = element.createNew("label", {
          attrList: {
            for: unique,
          },
          text: option,
        });
        div.append(check, label);
        fieldset.appendChild(div);
      });
      let legend = element.createNew("legend", {
        classArray: ["inputLabel"],
        text: fieldset.name,
      });
      fieldset.appendChild(legend);
    } else {
      throw new Error(
        `Function styleCheckList() requires param object with the name key.`
      );
    }
  } catch (err) {
    error.handle(err);
  }
}

function styleDateInput(input) {
  try {
    // check that required params are present on the input object
    if (typeof input.name === "string") {
      // create a div to encapsulate all date input elements
      let dateInput = element.createNew("div", {
        classArray: ["dateInput"],
      });

      // create a label that bound to the native date selector
      let unique = element.uniqueString();
      let labelText =
        typeof input.ariaLabel === "string"
          ? input.ariaLabel
          : `${input.name}:`;
      let label = element.createNew("label", {
        classArray: ["inputLabel"],
        attrObject: {
          for: unique,
        },
        text: labelText,
      });
      dateInput.appendChild(label);

      // create a new input to store and display the selected date
      let selection = element.createNew("input", {
        classArray: ["dateSelection"],
        attrObject: {
          id: unique, // bound to the native label
          type: "date",
          name: input.name,
          ariaLabel: inputLabel,
        },
      });
      dateInput.appendChild(selection);

      // create left and right arrow buttons to increment months
      let arrowLeft = element.createNew("button", {
        classArray: ["arrowLeft", "icon"],
        attrObject: {
          type: "button",
        },
        text: "keyboard_arrow_left",
      });
      let arrowRight = element.createNew("button", {
        classArray: ["arrowRight", "icon"],
        attrObject: {
          type: "button",
        },
        text: "keyboard_arrow_right",
      });
      dateInput.appendChild(arrowLeft);
      dateInput.appendChild(arrowRight);
      arrowLeft.addEventListener("click", function () {
        let readout = new Date(selection.value);
        let previousMonth = date.decrementMonth(new Date(readout));
        let previousMonthDays = date.getMonthArray(previousMonth);
        this.parentElement
          .querySelectorAll(".calendarDay")
          .forEach((day, i) => {
            day.innerText = previousMonthDays[i];
          });
        selection.value = new Date(
          nextMonth === 0 ? readout.getFullYear() - 1 : readout.getFullYear(),
          nextMonth,
          readout.getDate()
        );
      });
      arrowRight.addEventListener("click", function () {
        let readout = new Date(selection.value);
        let nextMonth = date.incrementMonth(readout);
        let nextMonthDays = date.getMonthArray(nextMonth);
        this.parentElement
          .querySelectorAll(".calendarDay")
          .forEach((day, i) => {
            day.innerText = nextMonthDays[i];
          });
        selection.value = new Date(
          nextMonth === 11 ? readout.getFullYear() + 1 : readout.getFullYear(),
          nextMonth,
          readout.getDate()
        );
      });

      // create buttons for each calendar day
      date.getMonthArray().forEach((day) => {
        let calendarDay = element.createNew("button", {
          classArray: ["calendarDay"],
          attrObject: {
            type: "button",
          },
          text: day,
        });
        dateInput.appendChild(calendarDay);
        calendarDay.addEventListener("click", function () {
          let currentSelection = new Date(selection.value);
          selection.value = new Date(
            currentSelection.getFullYear(),
            currentSelection.getMonth(),
            this.innerText
          );
        });
      });

      // create a button that resets the calendar
      let resetButton = element.createNew("button", {
        classArray: ["resetButton"],
        attrObject: {
          type: "reset",
        },
        text: "Reset",
      });
      dateInput.appendChild(resetButton);
      calendarDay.addEventListener("click", function () {
        today = new Date();
        let monthDays = date.getMonthArray(today);
        this.parentElement
          .querySelectorAll(".calendarDay")
          .forEach((day, i) => {
            day.innerText = monthDays[i];
          });
        selection.value = today;
      });

      // replace html input with styled version
      input.replaceWith(dateInput);
    } else {
      throw new Error("Function styleDateInput() requires param object with the name key.");
    }
  } catch (err) {
    error.handle(err);
  }
}

function styleDropdownInput(fieldset) {
  try {
    if (typeof fieldset.name === "string") {
      let unique = element.uniqueString();
      let label = element.createNew("label", {
        attrObject: { for: unique },
        text: fieldset.name,
      });
      let select = element.createNew("select", {
        classArray: ["dropdown"],
        attrObject: {
          id: unique,
          name: fieldset.name,
        },
      });
      let blank = element.createNew("option", {
        attrObject: { value: "" },
        text: "--- Choose ---",
      });
      select.appendChild(blank);
      let options = fieldset.innerText.split(",");
      options.forEach((option) => {
        let selectOption = element.createNew("option", {
          attrObject: { value: option },
          text: option,
        });
        select.appendChild(selectOption);
      });
      fieldset.replaceWith(select);
    } else {
      throw new Error(`Function styleDropdown() requires param object with the name key.`);
    }
  } catch (err) {
    error.handle(err);
  }
}

function styleRadioInput() {
  try {
    if (typeof fieldset.name === "string") {
      let options = fieldset.innerText.split(",");
      options.forEach((option) => {
        let unique = element.uniqueString();
        let div = element.createNew("div", {
          classArray: ["radioOption"],
        });
        let radio = element.createNew("input", {
          id: unique,
          attrObject: {
            type: "radio",
            name: option,
          },
        });
        let label = element.createNew("label", {
          attrList: {
            for: unique,
          },
          text: option,
        });
        div.append(radio, label);
        fieldset.appendChild(div);
      });
      let legend = element.createNew("legend", {
        classArray: ["inputLabel"],
        text: fieldset.name,
      });
      fieldset.appendChild(legend);
    } else {
      throw new Error(`Function styleRadioInput() requires param object with the name key.`);
    }
  } catch (err) {
    error.handle(err);
  }
}

function styleRangeInput(input) {
  try {
    let unique = element.uniqueString();
    if (typeof input.name === "string") {
      let rangeInput = element.createNew("div", {
        classArray: ["rangeInput"]
      });
      let label = element.createNew("label", {
        attrList: {
          for: unique,
        },
        text: input.name,
      });
      let range = element.createNew("input", {
        id: unique,
        attrObject: {
          type: "range",
          name: input.name,
        },
      });
      rangeInput.append(label, range);
    } else {
      throw new Error(`Function styleRangeInput() requires param object with the name key.`);
    }
  } catch (err) {
    error.handle(err);
  }
}

function styleTextInput(input) {
  try {
    // check that required params are present on the input object
    if (typeof input.name === "string") {
      // create a div to encapsulate all text input elements
      let textInput = element.createNew("div", {
        classArray: ["textInput"],
      });

      // create a label that bound to the native input
      let unique = element.uniqueString();
      let inputType = typeof input.type === "string" ? input.type : "text";
      let labelText =
        typeof input.ariaLabel === "string"
          ? input.ariaLabel
          : `${input.name}:`;
      let label = element.createNew("label", {
        classArray: ["inputLabel"],
        attrObject: {
          for: unique,
        },
        text: labelText,
      });
      textInput.appendChild(label);

      // create a native input
      let newInput = element.createNew("input", {
        attrObject: {
          id: unique,
          type: inputType,
          name: input.name,
        },
      });
      textInput.appendChild(newInput);
    } else {
      throw new Error("Function styleTextInput() requires param object with the name key.");
    }
  } catch (err) {
    error.handle(err);
  }
}

function styleTimeInput() {}

function styleToggleInput(fieldset) {
    try {
        if (typeof fieldset.name === "string") {
          let options = fieldset.innerText.split(",");
          options.forEach((option) => {
            let unique = element.uniqueString();
            let div = element.createNew("div", {
              classArray: ["toggleOption"],
            });
            let check = element.createNew("input", {
              id: unique,
              classArray: ["hidden"],
              attrObject: {
                type: "checkbox",
                name: option,
              },
            });
            let label = element.createNew("label", {
              attrList: {
                for: unique,
              },
              text: option
            });
            label.addEventListener("click", function() {
                let tog = this.querySelector(".toggle");
                if(tog.classList.contains("off") || tog.classList.contains("on")){
                    if(tog.classList.contains("off")) tog.classList.replace("off", "on");
                    if(tog.classList.contains("on")) tog.classList.replace("on", "off");
                } else {
                    tog.classList.add("off");
                    // ! Error handling
                }
            });
            let toggleSwitch = element.createNew("div", {
                classArray: ["toggleSwitch", "off"]
            });
            let toggle = element.createNew("div", {
                classArray: ["toggle"]
            });
            toggle.appendChild(toggleSwitch);
            label.appendChild(toggle);
            div.append(check, label);
            fieldset.appendChild(div);
          });
          let legend = element.createNew("legend", {
            classArray: ["inputLabel"],
            text: fieldset.name,
          });
          fieldset.appendChild(legend);
        } else {
          throw new Error(`Function styleCheckList() requires param object with the name key.`);
        }
      } catch (err) {
        error.handle(err);
      }
}
