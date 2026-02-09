const mongoose = require('mongoose');



const applicationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        company: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Applied", "Interview", "Offer", "Rejected"],
            default: "Applied"
        },
        statusHistory: [
            {
                status: {
                    type: String,
                    enum: ["Applied", "Interview", "Offer", "Rejected"],
                    default: "Applied"
                },

                changedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
        appliedDate: {
            type: Date,
            default: Date.now()
        },
        followupDate: {
            type: Date
        },
        notes: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Application", applicationSchema);