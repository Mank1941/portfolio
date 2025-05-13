/// Bean Puzzle Object

window.BeanPuzzle = class {
    constructor() {
        // Contains Beans (0s and 1s)
        this.slots = [[], []];

        // Messenger, responsible for transferring beans between slots
        this.msg = [0, 0, 0, 0];

        // Messenger Direction, who is the sender and receiver
        this.dir = 0;

        this.gen_beans();
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    gen_beans() {
        // Create an array of 16 0s and 16 1s
        const beans = Array(16).fill(0).concat(Array(16).fill(1));

        // Shuffle the array
        this.shuffle(beans);

        // Assign first 14 to slots[0], next 14 to slots[1], last 4 to msg
        this.slots[0] = beans.slice(0, 14);
        this.slots[1] = beans.slice(14, 28);
        this.msg = beans.slice(28);
    }

    shift_slot(slotIndex, vert) {
        let fromSlot, fromMsg;

        if (vert === 0) {
            // Pull from top of slot and messenger
            fromSlot = this.slots[slotIndex].shift();       // Remove first item from slot
            fromMsg = this.msg.shift();                     // Remove first item from messenger

            this.slots[slotIndex].push(fromMsg);            // Add to bottom of slot
            this.msg.push(fromSlot);                        // Add to bottom of messenger
        } else {
            // Pull from bottom of slot and messenger
            fromSlot = this.slots[slotIndex].pop();         // Remove last item from slot
            fromMsg = this.msg.pop();                       // Remove last item from messenger

            this.slots[slotIndex].unshift(fromMsg);         // Add to top of slot
            this.msg.unshift(fromSlot);                     // Add to top of messenger
        }
    }

    slot_complete() {
        // return this.slots.some(column => column.every(value => value === 0));

        const col0 = this.slots[0];
        const col1 = this.slots[1];

        const col0_all0 = col0.every(v => v === 0);
        const col0_all1 = col0.every(v => v === 1);
        const col1_all0 = col1.every(v => v === 0);
        const col1_all1 = col1.every(v => v === 1);

        // One column all 0s AND the other all 1s
        return (col0_all0 && col1_all1) || (col0_all1 && col1_all0);
    }

    printState() {
        console.log("Slots:");
        for (let i = 0; i < 14; i++) {
        console.log(`[${this.slots[0][i]}] [${this.slots[1][i]}]`);
        }
        console.log("Messenger:", this.msg, "Dir:", this.msgDir);
    }
}